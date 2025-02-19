const express = require("express");

const Contact = require("../models/Contact");

const router = express.Router();

// @route   POST /api/contact
// @desc    Save a new contact message

router.get("/messages", async (req, res) => {
    try {
      const messages = await ContactMessage.find(); // Fetch all messages
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Error fetching messages" });
    }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error. Try again later." });
  }
  
});

module.exports = router;


