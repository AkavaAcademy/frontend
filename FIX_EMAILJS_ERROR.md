# Fix: "The service ID not found" Error

## The Problem

The error "The service ID not found" means the Service ID in your `.env` file doesn't match any service in your EmailJS account.

## Solution: Get Your Correct EmailJS IDs

### Step 1: Go to EmailJS Dashboard

1. Visit: **https://dashboard.emailjs.com/admin**
2. Log in to your EmailJS account

### Step 2: Find Your Service ID

1. Click **Email Services** in the left sidebar
2. You'll see your service(s) listed
3. **Copy the Service ID** - it looks like `service_xxxxx` (starts with `service_`)

### Step 3: Find Your Template ID

1. Click **Email Templates** in the left sidebar
2. Find your template (or create one if you haven't)
3. **Copy the Template ID** - it looks like `template_xxxxx` (starts with `template_`)

### Step 4: Find Your Public Key

1. Click **Account** → **General** (top right)
2. Find **Public Key** (also called API Key)
3. **Copy the Public Key**

### Step 5: Update Your .env File

Update `.env.development.local` with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_YOUR_ACTUAL_ID
REACT_APP_EMAILJS_TEMPLATE_ID=template_YOUR_ACTUAL_ID
REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_ACTUAL_PUBLIC_KEY
```

**Important:** Replace `YOUR_ACTUAL_ID` with the values you copied from EmailJS dashboard.

### Step 6: Restart Your Development Server

After updating the `.env` file:

1. Stop your development server (Ctrl+C)
2. Start it again: `npm start`
3. Try submitting the contact form again

## Common Issues

### "Service ID not found"
- The Service ID doesn't exist in your EmailJS account
- You might have deleted the service
- Solution: Create a new service or use the correct Service ID

### "Template ID not found"
- The Template ID doesn't exist
- Solution: Create a template or use the correct Template ID

### Still not working?
- Make sure you restarted the dev server after changing `.env` file
- Check that the values don't have extra spaces
- Verify the IDs in EmailJS dashboard match what's in your `.env` file

