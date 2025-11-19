# Titan Email SMTP Authentication Troubleshooting

## Error: "535 5.7.8 Error: authentication failed"

This error means EmailJS cannot authenticate with your Titan email account. Follow these steps:

## ✅ Step 1: Enable Third-Party Access in Titan

**This is the most common issue!**

1. Log into Titan webmail:
   - Go to **wp.titan.email** (or your domain's webmail URL)
   - Or access via your hosting control panel

2. Navigate to email settings:
   - Look for **Settings** → **Email Client Settings**
   - Or **Settings** → **Configure 3rd party apps**
   - Or **Settings** → **IMAP/SMTP Settings**

3. **Enable third-party access:**
   - Enable **"IMAP/SMTP access"**
   - Enable **"Third-party email access"**
   - Or enable **"Allow less secure apps"** (if available)

4. **Save** the settings

5. Wait a few minutes for the changes to propagate

## ✅ Step 2: Verify SMTP Settings in EmailJS

Try these configurations in order:

### Option A: Port 587 (STARTTLS) - Recommended
```
Host: smtp.titan.email
Port: 587
Username: info@akavaacademy.com (FULL email address)
Password: [Your exact Titan email password]
Secure: ☐ (unchecked)
```

### Option B: Port 465 (SSL) - If 587 doesn't work
```
Host: smtp.titan.email
Port: 465
Username: info@akavaacademy.com (FULL email address)
Password: [Your exact Titan email password]
Secure: ☑ (checked)
```

## ✅ Step 3: Check Common Issues

### Username Format
- ✅ **Correct:** `info@akavaacademy.com` (full email)
- ❌ **Wrong:** `info` (just the username part)

### Password
- Make sure you're using the **exact password** for `info@akavaacademy.com`
- Check for typos or extra spaces
- If you recently changed the password, use the new one

### Two-Factor Authentication (2FA)
- If 2FA is enabled on your Titan account, you may need to:
  1. Disable 2FA temporarily, OR
  2. Generate an app-specific password (if Titan supports it)

## ✅ Step 4: Test Connection

After updating settings in EmailJS:

1. Click **Test** or **Send Test Email** in EmailJS service settings
2. Check if the test email is received
3. If it still fails, try the alternative port (465 instead of 587, or vice versa)

## 🔄 Alternative: Use Gmail for Testing

If Titan email continues to have issues, you can test with Gmail first:

### Gmail Setup:
1. In EmailJS, create a new service
2. Select **Gmail** (not Custom SMTP)
3. You'll need:
   - Enable 2FA on your Gmail account
   - Generate an "App Password" in Google Account settings
   - Use the app password (not your regular password)

This will help verify that EmailJS is working, then you can troubleshoot Titan separately.

## 📞 Still Having Issues?

If none of the above works:

1. **Contact Titan Support** - They can verify:
   - SMTP is enabled for your account
   - Your account allows third-party access
   - Any account-specific restrictions

2. **Check Titan Email Documentation:**
   - Look for "SMTP settings" or "Email client configuration"
   - Verify the exact SMTP server name for your domain

3. **Try from Email Client:**
   - Try setting up the same email in Outlook or Thunderbird
   - If it works there, the settings are correct
   - If it doesn't work there either, it's a Titan account issue

## ✅ Quick Checklist

- [ ] Third-party access enabled in Titan webmail
- [ ] Using full email as username: `info@akavaacademy.com`
- [ ] Password is correct (no typos)
- [ ] Tried both port 587 and 465
- [ ] Waited a few minutes after enabling third-party access
- [ ] Tested connection in EmailJS

## Common Titan SMTP Settings Summary

```
SMTP Server: smtp.titan.email
Port: 587 (STARTTLS) or 465 (SSL)
Username: info@akavaacademy.com
Password: [Your password]
Encryption: STARTTLS (port 587) or SSL (port 465)
```

