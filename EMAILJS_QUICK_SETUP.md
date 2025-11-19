# EmailJS Quick Setup Guide

Follow these steps to configure EmailJS for your contact form.

## 📋 What You'll Need

- EmailJS account (free at https://www.emailjs.com/)
- Your Titan email credentials (`info@akavaacademy.com`)

## 🚀 Step-by-Step Setup

### Step 1: Sign Up for EmailJS

1. Go to **https://www.emailjs.com/**
2. Click **Sign Up** (free account)
3. Verify your email address

---

### Step 2: Add Email Service

**IMPORTANT:** Before setting up EmailJS, you need to enable third-party access in Titan email:

1. Log into your Titan webmail at **wp.titan.email** (or your domain's webmail)
2. Go to **Settings** → **Configure 3rd party apps** (or **Email Client Settings**)
3. **Enable "Third-party email access"** or **"IMAP/SMTP access"**
4. Save the settings

Now set up EmailJS:

1. In EmailJS dashboard, click **Email Services** (left sidebar)
2. Click **Add New Service** button
3. Select **Custom SMTP**
4. Fill in these details:

```
Service Name: Titan Email
Host: smtp.titan.email
Port: 587
Username: info@akavaacademy.com (FULL email address)
Password: [Your Titan email password]
Secure: ☐ (leave unchecked - uses STARTTLS)
```

**Alternative if port 587 doesn't work:**
```
Port: 465
Secure: ☑ (check this box for SSL)
```

5. Click **Create Service**
6. **Copy the Service ID** (looks like `service_abc123`) - you'll need this!

**Troubleshooting Authentication Errors:**

If you get "535 5.7.8 Error: authentication failed":

1. **Double-check your password** - Make sure it's the exact password for `info@akavaacademy.com`
2. **Enable third-party access** in Titan webmail settings (see above)
3. **Try port 465 with SSL** instead of 587:
   - Port: `465`
   - Secure: ☑ (checked)
4. **Verify username format** - Must be the full email: `info@akavaacademy.com` (not just `info`)
5. **Check if 2FA is enabled** - If yes, you may need to use an app-specific password

---

### Step 3: Create Email Template

1. In EmailJS dashboard, click **Email Templates** (left sidebar)
2. Click **Create New Template** button
3. Fill in the template:

**Template Name:** `Contact Form`

**Subject Line:**
```
{{subject}}
```

**Content (HTML):**
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

4. In the **Settings** section:
   - **To Email:** `info@akavaacademy.com`
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}`

5. Click **Save**
6. **Copy the Template ID** (looks like `template_xyz789`) - you'll need this!

---

### Step 4: Get Your Public Key

1. In EmailJS dashboard, click **Account** → **General** (top right)
2. Find **Public Key** (also called API Key)
3. **Copy the Public Key** (long string of characters) - you'll need this!

---

### Step 5: Configure Your Project

#### For Local Development:

1. Create a file named `.env.development.local` in your project root (same folder as `package.json`)

2. Add these lines (replace with your actual values):

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. **Important:** Restart your development server after adding these variables!

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these three variables (for each environment: Development, Preview, Production):

   - **Name:** `REACT_APP_EMAILJS_SERVICE_ID`  
     **Value:** `service_abc123` (your Service ID)

   - **Name:** `REACT_APP_EMAILJS_TEMPLATE_ID`  
     **Value:** `template_xyz789` (your Template ID)

   - **Name:** `REACT_APP_EMAILJS_PUBLIC_KEY`  
     **Value:** `your_public_key_here` (your Public Key)

4. Make sure to add them to **all environments** (Development, Preview, Production)
5. Redeploy your site after adding the variables

---

## ✅ Testing

1. Start your development server:
   ```bash
   npm start
   ```

2. Go to your contact form page
3. Fill out and submit the form
4. Check `info@akavaacademy.com` inbox for the email

---

## 🔧 Troubleshooting

### "EmailJS не е конфигуриран" Error

- Make sure all 3 environment variables are set
- Restart your dev server after adding `.env` file
- For Vercel: Make sure variables are added and site is redeployed

### Email Not Received

- Check spam folder
- Verify the "To Email" in your template is `info@akavaacademy.com`
- Check EmailJS dashboard → **Logs** to see if email was sent
- Verify your Titan email password is correct in the service settings

### SMTP Authentication Failed

- Double-check your Titan email password
- Make sure the username is exactly `info@akavaacademy.com`
- Try testing the SMTP connection in EmailJS dashboard

---

## 📝 Summary Checklist

- [ ] Created EmailJS account
- [ ] Added Custom SMTP service (Titan Email)
- [ ] Copied Service ID
- [ ] Created email template
- [ ] Copied Template ID
- [ ] Copied Public Key
- [ ] Added environment variables to `.env.development.local`
- [ ] Added environment variables to Vercel (if deploying)
- [ ] Tested the contact form

---

## 💡 Quick Reference

Your three EmailJS values:
1. **Service ID:** `service_xxxxx` (from Email Services)
2. **Template ID:** `template_xxxxx` (from Email Templates)
3. **Public Key:** `xxxxx` (from Account → General)

All three must be set as environment variables for the contact form to work!

