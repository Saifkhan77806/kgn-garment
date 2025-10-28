"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { contactSchema } from "../lib/validations/contactSchema";

// ✅ Define schema (same as your client Zod form)

export async function sendMail(formData:any) {

  const validated = contactSchema.safeParse(formData);
  if (!validated.success) {
    throw new Error("Invalid form data");
  }

  const { name, email, phone, subject, message } = validated.data;

  // ✅ Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your app password
    },
  });

  // ✅ Construct HTML email
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #B87333;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="background:#fff;padding:15px;border-radius:8px;border:1px solid #ddd;">${message}</p>
      <hr style="margin-top:20px;">
      <p style="font-size:12px;color:#555;">Sent automatically from KGN Garment Contact Form</p>
    </div>
  `;

  // ✅ Send email
  await transporter.sendMail({
    from: `"KGN Garment Contact Form" <${email}>`,
    to: process.env.SMTP_USER, // your receiving email
    subject: `📩 New Inquiry: ${subject}`,
    html: htmlContent,
  });

  return { success: true };
}
