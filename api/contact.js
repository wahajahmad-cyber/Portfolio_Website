import nodemailer from "nodemailer";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, token } = req.body;

  if (!name || !email || !message || !token) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Verify reCAPTCHA
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY; // add in Vercel env
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );

    if (!response.data.success) {
      return res.status(400).json({ message: "Captcha verification failed" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Captcha verification error" });
  }

  // Send email using Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // App Password recommended
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // your email to receive messages
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error sending email" });
  }
}
