import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Nodemailer configuration for Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.BREVO_LOGIN, // your Brevo account email
        pass: process.env.BREVO_SMTP_KEY, // your Brevo SMTP key
      },
    });

    // Set up email data
    const mailOptions = {
      from: {
        name: "Codex Billing Website",
        address: process.env.BREVO_EMAIL,
      },
      to: process.env.CONTACT_EMAIL_TO, // recipient email (where you want to receive contact messages)
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      // Send a reply to the person who submitted the form
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    // Optional: Send an acknowledgement email to the user who submitted the form
    if (process.env.SEND_ACKNOWLEDGEMENT === "true") {
      const acknowledgementMail = {
        from: {
          name: "Codex Billing",
          address: process.env.BREVO_EMAIL,
        },
        to: email,
        subject: "Thank you for contacting Codex Billing",
        html: `
          <h2>Thank you for reaching out to us!</h2>
          <p>Hello ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>The Codex Billing Team</p>
        `,
      };

      await transporter.sendMail(acknowledgementMail);
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
