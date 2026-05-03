import { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // Reset form after submission
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        <p className="mt-4 text-gray-600">
          I'd love to hear from you! Feel free to reach out.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 mb-4 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 mb-4 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-2 mb-4 rounded"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
