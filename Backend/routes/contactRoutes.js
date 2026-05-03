const express = require("express");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

const Contact = require("../models/Contact");

const router = express.Router();

let cachedTransporter = null;
const getTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }
  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  return cachedTransporter;
};

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

router.get("/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
});

router.post(
  "/",
  [
    body("name").trim().isLength({ min: 2, max: 100 }).withMessage("Name must be 2–100 characters."),
    body("email").trim().isEmail().normalizeEmail().withMessage("A valid email is required."),
    body("message").trim().isLength({ min: 10, max: 5000 }).withMessage("Message must be 10–5000 characters.")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Invalid input.", details: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      const newContact = new Contact({ name, email, message });
      await newContact.save();

      const transporter = getTransporter();
      if (transporter) {
        const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

        const sendOps = [
          transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: ownerEmail,
            subject: `Portfolio Contact from ${name}`,
            html: `
              <h2 style="font-family:Inter,sans-serif">New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space:pre-wrap">${safeMessage}</p>
            `
          }),
          transporter.sendMail({
            from: `"Aasim Sanandwala" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thanks for reaching out!",
            html: `
              <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a">
                <h2 style="margin:0 0 16px;color:#1d4ed8">Hi ${safeName},</h2>
                <p>Thanks for getting in touch! I've received your message and will get back to you within 24–48 hours.</p>
                <p>In the meantime, feel free to check out my work on <a href="https://github.com/Aasim-Dev">GitHub</a> or connect on <a href="https://www.linkedin.com/in/aasim-sanandwala-b09a29221">LinkedIn</a>.</p>
                <p style="margin-top:24px">Best regards,<br><strong>Aasim Sanandwala</strong></p>
              </div>
            `
          })
        ];

        Promise.all(sendOps).catch((mailErr) => {
          console.error("Email send error:", mailErr);
        });
      }

      res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact save error:", error);
      res.status(500).json({ error: "Server error. Try again later." });
    }
  }
);

module.exports = router;
