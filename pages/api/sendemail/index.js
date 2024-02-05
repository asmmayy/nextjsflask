// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method != 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Get email data from the request body
    const { to, subject, text } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service and credentials here
      service: 'gmail',
      auth: {
        user: 'faizan480khan@gmail.com',
        pass: 'faizakhan2019',
      },
    });

    // Send the email
    await transporter.sendMail({
      from: 'faizan480khan@gmail.com',
      to,
      subject,
      text,
    });

    // Send success response
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
