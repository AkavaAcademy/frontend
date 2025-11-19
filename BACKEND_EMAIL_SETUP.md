# Backend Email Setup with Nodemailer

This guide explains how to set up the backend API endpoint to send emails using Nodemailer when the contact form is submitted.

## Prerequisites

1. Install nodemailer in your backend project:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer  # If using TypeScript
```

## Environment Variables

Add the following environment variables to your backend `.env` file:

```env
TITAN_EMAIL_HOST=smtp.titan.email
TITAN_EMAIL_PORT=587
TITAN_EMAIL_USER=info@akavaacademy.com
TITAN_EMAIL_PASSWORD=your_titan_password_here
TITAN_EMAIL_FROM=info@akavaacademy.com
TITAN_EMAIL_TO=info@akavaacademy.com
```

## Backend Implementation

### Example Express.js Route

Create or update your contact form endpoint (e.g., `POST /api/contacts`) in your backend:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.TITAN_EMAIL_HOST || "smtp.titan.email",
  port: parseInt(process.env.TITAN_EMAIL_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.TITAN_EMAIL_USER || "info@akavaacademy.com",
    pass: process.env.TITAN_EMAIL_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email transporter error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// POST /api/contacts
router.post('/contacts', async (req, res) => {
  try {
    const { contact } = req.body;
    const { name, email, phone, course, message } = contact;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        message: 'Име и имейл са задължителни полета.'
      });
    }

    // Prepare email content
    const subject = course 
      ? `Заявка за записване - ${course}`
      : 'Ново запитване от контактна форма';

    const emailBody = `
      <h2>${course ? 'Заявка за записване' : 'Ново запитване от контактна форма'}</h2>
      
      <h3>Информация за контакт:</h3>
      <ul>
        <li><strong>Име:</strong> ${name}</li>
        <li><strong>Имейл:</strong> ${email}</li>
        ${phone ? `<li><strong>Телефон:</strong> ${phone}</li>` : ''}
        ${course ? `<li><strong>Избран курс:</strong> ${course}</li>` : ''}
      </ul>
      
      ${message ? `
      <h3>Допълнителна информация:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      ` : ''}
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        Това съобщение е изпратено автоматично от контактната форма на akavaacademy.com
      </p>
    `;

    const textVersion = `
${course ? 'Заявка за записване' : 'Ново запитване от контактна форма'}

Информация за контакт:
- Име: ${name}
- Имейл: ${email}
${phone ? `- Телефон: ${phone}` : ''}
${course ? `- Избран курс: ${course}` : ''}

${message ? `Допълнителна информация:\n${message}` : ''}
    `;

    // Send email
    const mailOptions = {
      from: process.env.TITAN_EMAIL_FROM || "info@akavaacademy.com",
      to: process.env.TITAN_EMAIL_TO || "info@akavaacademy.com",
      replyTo: email, // Allow replying directly to the sender
      subject: subject,
      text: textVersion,
      html: emailBody,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    // Optionally, save the contact to database here
    // await Contact.create({ name, email, phone, course, message });

    res.status(200).json({
      message: 'Съобщението е изпратено успешно.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      message: 'Грешка при изпращане на съобщението. Моля, опитайте отново по-късно.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
```

### TypeScript Example

If you're using TypeScript:

```typescript
import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  course?: string;
  message?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.TITAN_EMAIL_HOST || "smtp.titan.email",
  port: parseInt(process.env.TITAN_EMAIL_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.TITAN_EMAIL_USER || "info@akavaacademy.com",
    pass: process.env.TITAN_EMAIL_PASSWORD,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("Email transporter error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

router.post('/contacts', async (req: Request, res: Response) => {
  try {
    const { contact }: { contact: ContactData } = req.body;
    const { name, email, phone, course, message } = contact;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        message: 'Име и имейл са задължителни полета.'
      });
    }

    const subject = course 
      ? `Заявка за записване - ${course}`
      : 'Ново запитване от контактна форма';

    const emailBody = `
      <h2>${course ? 'Заявка за записване' : 'Ново запитване от контактна форма'}</h2>
      
      <h3>Информация за контакт:</h3>
      <ul>
        <li><strong>Име:</strong> ${name}</li>
        <li><strong>Имейл:</strong> ${email}</li>
        ${phone ? `<li><strong>Телефон:</strong> ${phone}</li>` : ''}
        ${course ? `<li><strong>Избран курс:</strong> ${course}</li>` : ''}
      </ul>
      
      ${message ? `
      <h3>Допълнителна информация:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      ` : ''}
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        Това съобщение е изпратено автоматично от контактната форма на akavaacademy.com
      </p>
    `;

    const textVersion = `
${course ? 'Заявка за записване' : 'Ново запитване от контактна форма'}

Информация за контакт:
- Име: ${name}
- Имейл: ${email}
${phone ? `- Телефон: ${phone}` : ''}
${course ? `- Избран курс: ${course}` : ''}

${message ? `Допълнителна информация:\n${message}` : ''}
    `;

    const mailOptions = {
      from: process.env.TITAN_EMAIL_FROM || "info@akavaacademy.com",
      to: process.env.TITAN_EMAIL_TO || "info@akavaacademy.com",
      replyTo: email,
      subject: subject,
      text: textVersion,
      html: emailBody,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      message: 'Съобщението е изпратено успешно.',
      messageId: info.messageId
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({
      message: 'Грешка при изпращане на съобщението. Моля, опитайте отново по-късно.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;
```

## Frontend Integration

The frontend is already configured to send POST requests to `/api/contacts` with the following structure:

```json
{
  "contact": {
    "name": "Име на потребителя",
    "email": "user@example.com",
    "phone": "+359 888 123 456",
    "course": "Име на курса (опционално)",
    "message": "Допълнителна информация (опционално)"
  }
}
```

## Testing

1. **Test the email transporter:**
```javascript
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});
```

2. **Test the endpoint:**
```bash
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "contact": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "+359 888 123 456",
      "course": "Test Course",
      "message": "Test message"
    }
  }'
```

## Troubleshooting

### Common Issues

1. **Authentication failed:**
   - Verify your Titan email credentials
   - Check if 2FA is enabled (you may need an app-specific password)
   - Ensure the password doesn't contain special characters that need escaping

2. **Connection timeout:**
   - Check firewall settings
   - Verify the SMTP port (587 for TLS, 465 for SSL)
   - Try using `secure: true` for port 465

3. **Email not received:**
   - Check spam folder
   - Verify the recipient email address
   - Check Titan email service status

### Security Notes

- Never commit `.env` files to version control
- Use environment variables for all sensitive credentials
- Consider rate limiting on the contact endpoint to prevent spam
- Add CAPTCHA verification for production environments
- Validate and sanitize all user inputs

## Alternative Email Services

If Titan email doesn't work, you can use other SMTP services:

### Gmail (for testing)
```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-specific-password' // Not your regular password!
  }
});
```

### SendGrid
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

### Mailgun
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASSWORD
  }
});
```

