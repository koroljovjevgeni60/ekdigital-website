import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter using local SMTP server (Poste.io)
    // Use host.docker.internal for Docker or the server's IP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '172.17.0.1',
      port: 25,
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email to company
    await transporter.sendMail({
      from: `"EK Digital Website" <noreply@ekdigital.eu>`,
      to: 'info@ekdigital.eu',
      replyTo: email,
      subject: `New Contact Form: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          <hr style="border: 1px solid #e5e7eb; margin-top: 20px;" />
          <p style="color: #6b7280; font-size: 12px;">This message was sent from the contact form at ekdigital.eu</p>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

