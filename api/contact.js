import nodemailer from "nodemailer";
import axios from "axios";
import qs from "qs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, token } = req.body;
  if (!name || !email || !message || !token) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // ✅ Verify reCAPTCHA
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      qs.stringify({ secret, response: token }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (!response.data.success) {
      return res.status(400).json({ message: "Captcha verification failed" });
    }
  } catch (err) {
    console.error("Captcha error:", err);
    return res.status(500).json({ message: "Captcha verification error" });
  }

  // ✅ Send styled email using Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form Submission from ${name}`,
      text: `
You have a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <h2>📩 New Portfolio Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
        <hr />
        <p style="font-size:12px;color:gray;">This email was sent from your portfolio website contact form.</p>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ message: "Error sending email" });
  }
}