const nodemailer = require("nodemailer");
require("dotenv").config();

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Your Gmail
    pass: process.env.EMAIL_PASS,  // Your App Password (not regular password)
  },
});

// Function to Send Email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent Successfully!");
  } catch (error) {
    console.error("❌ Error Sending Email:", error);
  }
};

module.exports = sendEmail;
