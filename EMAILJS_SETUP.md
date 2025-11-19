# EmailJS Setup Guide

EmailJS allows you to send emails directly from your frontend without needing a backend server. This guide will help you set it up.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (for testing)
   - **Outlook/Hotmail**
   - **Custom SMTP** (for Titan email or other providers)

### For Titan Email (Custom SMTP):

1. Select **Custom SMTP**
2. Fill in the details:
   - **Service Name**: `Titan Email` (or any name you prefer)
   - **Host**: `smtp.titan.email`
   - **Port**: `587`
   - **Username**: `info@akavaacademy.com`
   - **Password**: Your Titan email password
   - **Secure**: Leave unchecked (TLS will be used automatically)

3. Click **Create Service**
4. Copy the **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name**: `Contact Form`

**Subject**:
```
{{subject}}
```

**Content** (HTML):
```html
<h2>{{subject}}</h2>

<h3>Информация за контакт:</h3>
<ul>
  <li><strong>Име:</strong> {{from_name}}</li>
  <li><strong>Имейл:</strong> {{from_email}}</li>
  <li><strong>Телефон:</strong> {{phone}}</li>
  <li><strong>Курс:</strong> {{course}}</li>
</ul>

<h3>Съобщение:</h3>
<p>{{message}}</p>

<hr>
<p style="color: #666; font-size: 12px;">
  Това съобщение е изпратено автоматично от контактната форма на akavaacademy.com
</p>
```

4. Set **To Email** to: `info@akavaacademy.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{from_email}}`
7. Click **Save**
8. Copy the **Template ID** (starts with `template_`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Configure Environment Variables

### For Local Development:

Create a `.env.development.local` file in your project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

Replace the values with your actual IDs from EmailJS.

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables for each environment (Development, Preview, Production):

   - `REACT_APP_EMAILJS_SERVICE_ID` = `service_xxxxx`
   - `REACT_APP_EMAILJS_TEMPLATE_ID` = `template_xxxxx`
   - `REACT_APP_EMAILJS_PUBLIC_KEY` = `xxxxxxxxxxxxx`

4. Make sure to add them to all environments (Development, Preview, Production)

## Step 6: Test the Setup

1. Start your development server:
   ```bash
   npm start
   ```

2. Navigate to the contact form on your website
3. Fill out and submit the form
4. Check your email inbox (`info@akavaacademy.com`) for the test email

## Troubleshooting

### Email not received?

1. **Check spam folder** - Sometimes emails end up in spam
2. **Verify EmailJS service** - Make sure your email service is active in EmailJS dashboard
3. **Check template settings** - Ensure "To Email" is set correctly in the template
4. **Verify environment variables** - Make sure all three variables are set correctly
5. **Check browser console** - Look for any error messages

### "EmailJS не е конфигуриран" error?

- Make sure all three environment variables are set:
  - `REACT_APP_EMAILJS_SERVICE_ID`
  - `REACT_APP_EMAILJS_TEMPLATE_ID`
  - `REACT_APP_EMAILJS_PUBLIC_KEY`
- Restart your development server after adding environment variables
- For production, make sure variables are set in Vercel dashboard

### SMTP Authentication Failed?

- Double-check your email password in the EmailJS service settings
- For Gmail, you may need to use an "App Password" instead of your regular password
- For Titan email, ensure the password is correct and the account is active

### Rate Limits

- Free tier: 200 emails/month
- If you exceed the limit, you'll need to upgrade or wait until next month
- Check your usage in the EmailJS dashboard

## Security Notes

- The EmailJS Public Key is safe to expose in frontend code (it's designed for this)
- However, you should still:
  - Set up rate limiting in EmailJS dashboard
  - Enable reCAPTCHA for production (optional, in EmailJS settings)
  - Monitor your email usage

## Alternative: Using Gmail for Testing

If you want to test with Gmail first:

1. In EmailJS, add a new service and select **Gmail**
2. You'll need to:
   - Enable 2-factor authentication on your Gmail account
   - Generate an "App Password" in your Google Account settings
   - Use the app password (not your regular password) in EmailJS

## Next Steps

Once EmailJS is configured, your contact form will automatically send emails to `info@akavaacademy.com` when users submit it. The form will:
- Include the user's name, email, phone, course (if selected), and message
- Send different subject lines for course registrations vs. general inquiries
- Show success/error messages to users
