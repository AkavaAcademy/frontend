# Fix Titan Email Authentication Error (535 5.7.8)

## 🔴 The Problem
Error: `535 5.7.8 Error: authentication failed`

This means Titan email is blocking the connection. Here's how to fix it:

---

## ✅ Solution 1: Enable Third-Party Access (MOST IMPORTANT)

### Option A: Via Titan Webmail

1. **Log into Titan webmail:**
   - Go to: `https://wp.titan.email` (or your domain's webmail URL)
   - Login with: `info@akavaacademy.com` and your password

2. **Find Email Settings:**
   - Look for a **Settings** or **⚙️** icon (usually top right)
   - Navigate to: **Settings** → **Email Client Settings**
   - OR: **Settings** → **IMAP/POP3 Settings**
   - OR: **Settings** → **Configure 3rd party apps**

3. **Enable Access:**
   - Find: **"Enable IMAP"** or **"Enable SMTP"** or **"Third-party access"**
   - **Turn it ON** ✅
   - **Save** the settings

4. **Wait 5-10 minutes** for changes to take effect

### Option B: Via Hosting Control Panel

If you can't find it in webmail:

1. Log into your **hosting control panel** (where you manage your domain)
2. Look for **Email** or **Email Accounts** section
3. Find `info@akavaacademy.com`
4. Look for **"Email Client Settings"** or **"IMAP/SMTP"**
5. Enable **"IMAP/SMTP Access"** or **"Third-party access"**
6. Save and wait 5-10 minutes

---

## ✅ Solution 2: Verify EmailJS Settings

In EmailJS dashboard, edit your service and check:

### Settings for Port 587:
```
Service Name: Titan Email
Host: smtp.titan.email
Port: 587
Username: info@akavaacademy.com  ← FULL email address
Password: [Your exact password - no spaces before/after]
Secure: ☐ UNCHECKED
```

### If 587 doesn't work, try Port 465:
```
Service Name: Titan Email
Host: smtp.titan.email
Port: 465
Username: info@akavaacademy.com
Password: [Your exact password]
Secure: ☑ CHECKED  ← Important!
```

---

## ✅ Solution 3: Test with Gmail First (Recommended)

To verify EmailJS is working, test with Gmail first:

### Gmail Setup:

1. **In EmailJS:** Create a NEW service (keep Titan for later)
2. **Select:** Gmail (not Custom SMTP)
3. **You'll need:**
   - A Gmail account
   - 2FA enabled on that Gmail
   - An "App Password" (not your regular password)

### Get Gmail App Password:

1. Go to: https://myaccount.google.com/
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** (if not already)
4. Scroll to **App passwords**
5. Generate a new app password for "Mail"
6. Copy the 16-character password

### Use in EmailJS:

- Service: **Gmail**
- Username: `your-email@gmail.com`
- Password: `xxxx xxxx xxxx xxxx` (the app password, not your regular password)

**Test this first!** If Gmail works, EmailJS is fine and the issue is with Titan settings.

---

## ✅ Solution 4: Check Titan Account Restrictions

Some Titan accounts have restrictions. Check:

1. **Account Status:** Make sure the email account is active
2. **Password:** Try logging into webmail with the same password to verify it works
3. **Domain Settings:** Some domains require SMTP to be enabled at domain level (check hosting panel)

---

## ✅ Solution 5: Contact Titan Support

If nothing works:

1. **Contact Titan Support:**
   - Email: support@titan.email
   - Or via your hosting provider's support

2. **Ask them:**
   - "How do I enable SMTP/IMAP access for info@akavaacademy.com?"
   - "Is third-party email access enabled for my account?"
   - "What are the exact SMTP settings for my domain?"

---

## 🔍 Quick Diagnostic Checklist

Before contacting support, verify:

- [ ] Can you log into `wp.titan.email` with `info@akavaacademy.com`?
- [ ] Is third-party access enabled in Titan settings?
- [ ] Are you using the FULL email as username: `info@akavaacademy.com`?
- [ ] Is the password correct (test by logging into webmail)?
- [ ] Did you wait 5-10 minutes after enabling third-party access?
- [ ] Did you try both port 587 and 465?
- [ ] Did you test with Gmail to verify EmailJS works?

---

## 💡 Alternative: Use a Different Email Service

If Titan continues to have issues, you can:

1. **Use Gmail** (free, reliable, easy setup)
2. **Use SendGrid** (free tier: 100 emails/day)
3. **Use Mailgun** (free tier: 5,000 emails/month)

All of these work well with EmailJS and are easier to configure than Titan.

---

## 🎯 Most Likely Fix

**90% of the time, the issue is:**
- Third-party access is NOT enabled in Titan webmail settings

**To fix:**
1. Log into `wp.titan.email`
2. Go to Settings → Email Client Settings
3. Enable "IMAP/SMTP Access" or "Third-party access"
4. Wait 10 minutes
5. Try EmailJS again

If you can't find these settings, contact your hosting provider or Titan support - they can enable it for you.

