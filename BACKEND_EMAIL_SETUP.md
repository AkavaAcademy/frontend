# Backend Email Setup for Contact Form

## Overview

The contact form now collects the following information and sends it to the backend:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Course** (optional - selected from dropdown)
- **Message** (optional - additional information)

## Frontend Implementation

The frontend sends a POST request to `/api/contacts` with the following structure:

```json
{
  "contact": {
    "name": "Иван Петров",
    "email": "ivan@example.com",
    "phone": "+359 888 123 456",
    "course": "Python за начинаещи (12-15 г.)",
    "message": "Имам въпроси относно курса..."
  }
}
```

## Backend Requirements

### 1. API Endpoint

**Endpoint**: `POST /api/contacts`

**Request Body**:
```json
{
  "contact": {
    "name": "string (required)",
    "email": "string (required)",
    "phone": "string (optional)",
    "course": "string (optional)",
    "message": "string (optional)"
  }
}
```

### 2. Email Sending

The backend should send an email to **info@akavaacademy.com** with the contact form data.

**Email Format Example**:

```
Subject: Ново запитване от контактна форма - [Име]

Здравейте,

Получено е ново запитване от контактната форма на уебсайта:

Име: [name]
Имейл: [email]
Телефон: [phone] (ако е предоставен)
Интересен курс: [course] (ако е избран)
Съобщение: [message] (ако е предоставено)

Моля, свържете се с клиента на посочения имейл адрес.

---
Това е автоматично генерирано съобщение от контактната форма на Akava Academy.
```

### 3. Response Format

**Success Response (200/201)**:
```json
{
  "success": true,
  "message": "Благодарим ви! Получихме вашето съобщение и ще се свържем с вас в рамките на 24 часа.",
  "contact": {
    "id": 1,
    "name": "Иван Петров",
    "email": "ivan@example.com",
    ...
  }
}
```

**Error Response (400/500)**:
```json
{
  "error": "Error message",
  "message": "Failed to send email",
  "errors": ["Validation error 1", "Validation error 2"]
}
```

## Backend Implementation Examples

### Ruby on Rails Example

```ruby
# app/controllers/api/contacts_controller.rb
class Api::ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    
    if @contact.save
      # Send email
      ContactMailer.new_contact(@contact).deliver_now
      
      render json: {
        success: true,
        message: 'Благодарим ви! Получихме вашето съобщение и ще се свържем с вас в рамките на 24 часа.',
        contact: @contact
      }, status: :created
    else
      render json: {
        error: 'Validation failed',
        errors: @contact.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :phone, :course, :message)
  end
end

# app/mailers/contact_mailer.rb
class ContactMailer < ApplicationMailer
  def new_contact(contact)
    @contact = contact
    mail(
      to: 'info@akavaacademy.com',
      subject: "Ново запитване от контактна форма - #{@contact.name}"
    )
  end
end

# app/views/contact_mailer/new_contact.html.erb
<h2>Ново запитване от контактна форма</h2>

<p>Здравейте,</p>

<p>Получено е ново запитване от контактната форма на уебсайта:</p>

<ul>
  <li><strong>Име:</strong> <%= @contact.name %></li>
  <li><strong>Имейл:</strong> <%= @contact.email %></li>
  <% if @contact.phone.present? %>
    <li><strong>Телефон:</strong> <%= @contact.phone %></li>
  <% end %>
  <% if @contact.course.present? %>
    <li><strong>Интересен курс:</strong> <%= @contact.course %></li>
  <% end %>
  <% if @contact.message.present? %>
    <li><strong>Съобщение:</strong> <%= @contact.message %></li>
  <% end %>
</ul>

<p>Моля, свържете се с клиента на посочения имейл адрес: <%= @contact.email %></p>

<hr>
<p><em>Това е автоматично генерирано съобщение от контактната форма на Akava Academy.</em></p>
```

### Node.js/Express Example

```javascript
// routes/contacts.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure email transporter (using Gmail as example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

router.post('/api/contacts', async (req, res) => {
  try {
    const { contact } = req.body;
    const { name, email, phone, course, message } = contact;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Name and email are required'
      });
    }

    // Create email content
    const emailContent = `
      <h2>Ново запитване от контактна форма</h2>
      <p>Здравейте,</p>
      <p>Получено е ново запитване от контактната форма на уебсайта:</p>
      <ul>
        <li><strong>Име:</strong> ${name}</li>
        <li><strong>Имейл:</strong> ${email}</li>
        ${phone ? `<li><strong>Телефон:</strong> ${phone}</li>` : ''}
        ${course ? `<li><strong>Интересен курс:</strong> ${course}</li>` : ''}
        ${message ? `<li><strong>Съобщение:</strong> ${message}</li>` : ''}
      </ul>
      <p>Моля, свържете се с клиента на посочения имейл адрес: ${email}</p>
      <hr>
      <p><em>Това е автоматично генерирано съобщение от контактната форма на Akava Academy.</em></p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@akavaacademy.com',
      subject: `Ново запитване от контактна форма - ${name}`,
      html: emailContent
    });

    res.status(201).json({
      success: true,
      message: 'Благодарим ви! Получихме вашето съобщение и ще се свържем с вас в рамките на 24 часа.',
      contact: { name, email, phone, course, message }
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to send email'
    });
  }
});

module.exports = router;
```

### Python/Django Example

```python
# views.py
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def create_contact(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        contact = data.get('contact', {})
        
        name = contact.get('name')
        email = contact.get('email')
        phone = contact.get('phone', '')
        course = contact.get('course', '')
        message = contact.get('message', '')
        
        if not name or not email:
            return JsonResponse({
                'error': 'Validation failed',
                'message': 'Name and email are required'
            }, status=400)
        
        # Create email content
        email_body = f"""
        Здравейте,
        
        Получено е ново запитване от контактната форма на уебсайта:
        
        Име: {name}
        Имейл: {email}
        """
        
        if phone:
            email_body += f"Телефон: {phone}\n"
        if course:
            email_body += f"Интересен курс: {course}\n"
        if message:
            email_body += f"Съобщение: {message}\n"
        
        email_body += f"""
        Моля, свържете се с клиента на посочения имейл адрес: {email}
        
        ---
        Това е автоматично генерирано съобщение от контактната форма на Akava Academy.
        """
        
        # Send email
        try:
            send_mail(
                subject=f'Ново запитване от контактна форма - {name}',
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['info@akavaacademy.com'],
                fail_silently=False,
            )
            
            return JsonResponse({
                'success': True,
                'message': 'Благодарим ви! Получихме вашето съобщение и ще се свържем с вас в рамките на 24 часа.',
                'contact': contact
            }, status=201)
        except Exception as e:
            return JsonResponse({
                'error': 'Internal server error',
                'message': 'Failed to send email'
            }, status=500)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)
```

## Environment Variables Needed

For email sending, you'll need to configure:

- **EMAIL_USER** - Email address to send from
- **EMAIL_PASSWORD** - Email password or app password
- **SMTP_HOST** - SMTP server (if not using Gmail)
- **SMTP_PORT** - SMTP port (usually 587 for TLS)

## Testing

Test the endpoint with:

```bash
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "contact": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "+359 888 123 456",
      "course": "Python за начинаещи (12-15 г.)",
      "message": "Test message"
    }
  }'
```

## Notes

- The email should be sent to **info@akavaacademy.com**
- Include all form fields in the email
- Format the email in a readable way
- Consider adding a confirmation email to the user (optional)
- Store the contact in database for record keeping (optional but recommended)

