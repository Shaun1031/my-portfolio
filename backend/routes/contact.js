const express = require("express");
const sendEmail = require("../config/emailConfig");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const subject = `New Contact Form Submission from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  try {
    await sendEmail(process.env.EMAIL_USER, subject, text);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
});

module.exports = router;
