# IP Whitelist Setup for Vercel

This guide explains how to restrict access to your Vercel deployment to specific IP addresses for testing purposes.

## How It Works

The `middleware.ts` file uses Vercel Edge Middleware to check incoming requests against a whitelist of allowed IP addresses. If the client's IP is not in the whitelist, they receive a 403 Forbidden response.

## Setup Instructions

### 1. Get Your IP Address

Find your public IP address:
- Visit [whatismyip.com](https://www.whatismyip.com/) or
- Run: `curl ifconfig.me` in terminal

### 2. Configure Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `ALLOWED_IPS`
   - **Value**: Your IP addresses (comma-separated)
   - **Environment**: Select the environment(s) where you want IP restriction
     - Production (for production deployment)
     - Preview (for staging/preview deployments)
     - Development (optional, for local testing)

### 3. IP Address Format

**Single IP:**
```
203.0.113.1
```

**Multiple IPs (comma-separated):**
```
203.0.113.1,198.51.100.42,192.0.2.15
```

**CIDR Notation (IP ranges):**
```
192.168.1.0/24,10.0.0.0/8
```

**Mixed format:**
```
203.0.113.1,192.168.1.0/24,198.51.100.42
```

### 4. Example Configuration

**For Testing (Single IP):**
```
ALLOWED_IPS=203.0.113.1
```

**For Team Testing (Multiple IPs):**
```
ALLOWED_IPS=203.0.113.1,198.51.100.42,192.0.2.15,10.0.0.0/24
```

**For Office Network (CIDR):**
```
ALLOWED_IPS=192.168.1.0/24,10.0.0.0/8
```

## How to Test

1. **Deploy to Vercel** with `ALLOWED_IPS` environment variable set
2. **Access from allowed IP**: Should work normally
3. **Access from blocked IP**: Will see 403 Forbidden error

## Disabling IP Whitelist

To disable IP whitelisting (allow all IPs):

1. **Option 1**: Remove the `ALLOWED_IPS` environment variable from Vercel
2. **Option 2**: Set `ALLOWED_IPS` to an empty string: `ALLOWED_IPS=`

The middleware will automatically allow all IPs if `ALLOWED_IPS` is not set or empty.

## Important Notes

### IP Detection
- Vercel provides the real client IP in `x-vercel-forwarded-for` or `x-forwarded-for` headers
- The middleware extracts the first IP from these headers
- If IP cannot be determined, access is **denied** (fail-secure)

### Static Files
- Static files (images, CSS, JS) are **not** protected by default
- Only HTML pages and API routes are protected
- This is configured in the `matcher` pattern

### CIDR Notation
- Supports CIDR notation for IP ranges (e.g., `192.168.1.0/24`)
- Useful for allowing entire office networks or VPN ranges
- Format: `IP_ADDRESS/PREFIX_LENGTH`
  - `/24` = 256 IPs (192.168.1.0 to 192.168.1.255)
  - `/16` = 65,536 IPs
  - `/8` = 16,777,216 IPs

### Logging
- Allowed IPs are logged: `✅ Allowed access from IP: x.x.x.x`
- Blocked IPs are logged: `🚫 Blocked access from IP: x.x.x.x`
- Check Vercel function logs to see access attempts

## Troubleshooting

### "Access Denied" even with correct IP

1. **Check your IP**: Your IP might have changed (dynamic IP)
   - Re-check your current IP: `curl ifconfig.me`
   - Update `ALLOWED_IPS` in Vercel

2. **Check environment variable**: Ensure `ALLOWED_IPS` is set for the correct environment
   - Production deployments use Production env vars
   - Preview deployments use Preview env vars

3. **Redeploy**: After changing environment variables, redeploy your project

4. **Check logs**: View Vercel function logs to see what IP was detected

### IP Whitelist Not Working

1. **Verify middleware is deployed**: Check that `middleware.ts` is in your repository
2. **Check matcher pattern**: Ensure the path you're accessing matches the matcher
3. **Check environment variable name**: Must be exactly `ALLOWED_IPS` (case-sensitive)

### Need to Allow All IPs Temporarily

1. Remove `ALLOWED_IPS` environment variable, OR
2. Set it to empty: `ALLOWED_IPS=`
3. Redeploy

## Security Considerations

⚠️ **Important**: IP whitelisting is not foolproof security:
- IP addresses can be spoofed
- Users behind the same NAT/VPN share the same public IP
- Mobile users' IPs change frequently
- Use this for **testing/development**, not as primary security

For production security, consider:
- Authentication/authorization
- Rate limiting
- DDoS protection
- Vercel's built-in security features

## Example Use Cases

1. **Staging Environment**: Restrict to team members' IPs
2. **Beta Testing**: Allow only beta testers' IPs
3. **Internal Tools**: Restrict to office network
4. **Development Preview**: Limit access during development

## Removing IP Whitelist

When ready to make the site public:

1. Go to Vercel → Settings → Environment Variables
2. Delete or clear the `ALLOWED_IPS` variable
3. Redeploy your project

The middleware will automatically allow all IPs when `ALLOWED_IPS` is not set.

