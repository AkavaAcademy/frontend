# Environment Configuration Guide

This guide explains how to set up environment variables for different environments (development, staging, and production).

## Environment Files

Create React App automatically loads environment files based on the `NODE_ENV` and build mode:

- **Development**: `.env.development.local` (highest priority)
- **Staging**: `.env.staging.local` (if using custom build)
- **Production**: `.env.production.local` (highest priority)

**Note**: All `.env*.local` files are gitignored and should NOT be committed.

## Setup Instructions

### 1. Local Development

Create `.env.development.local` in the project root:

```bash
# .env.development.local
REACT_APP_API_BASE_URL=http://127.0.0.1:3000
REACT_APP_ENV=development
```

### 2. Staging Environment

#### Option A: Local File (for testing)

Create `.env.staging.local` in the project root:

```bash
# .env.staging.local
REACT_APP_API_BASE_URL=https://staging-api.akavaacademy.com
REACT_APP_ENV=staging
```

#### Option B: Vercel Dashboard (Recommended)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables for **Preview** environment:
   - `REACT_APP_API_BASE_URL` = `https://staging-api.akavaacademy.com`
   - `REACT_APP_ENV` = `staging`

### 3. Production Environment

#### Option A: Local File (for testing)

Create `.env.production.local` in the project root:

```bash
# .env.production.local
REACT_APP_API_BASE_URL=https://api.akavaacademy.com
REACT_APP_ENV=production
```

#### Option B: Vercel Dashboard (Recommended)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables for **Production** environment:
   - `REACT_APP_API_BASE_URL` = `https://api.akavaacademy.com`
   - `REACT_APP_ENV` = `production`

## Vercel Environment Variables Setup

### For Staging (Preview Environment)

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variable:
   - **Key**: `REACT_APP_API_BASE_URL`
   - **Value**: `https://staging-api.akavaacademy.com`
   - **Environment**: Select "Preview"
3. Add variable:
   - **Key**: `REACT_APP_ENV`
   - **Value**: `staging`
   - **Environment**: Select "Preview"

### For Production

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variable:
   - **Key**: `REACT_APP_API_BASE_URL`
   - **Value**: `https://api.akavaacademy.com`
   - **Environment**: Select "Production"
3. Add variable:
   - **Key**: `REACT_APP_ENV`
   - **Value**: `production`
   - **Environment**: Select "Production"

### For Development (Optional)

You can also set development variables in Vercel, but local `.env.development.local` files take precedence.

## Environment Variable Priority

1. `.env.development.local`, `.env.staging.local`, or `.env.production.local` (local files)
2. Vercel Environment Variables (for deployments)
3. Default values in code

## Quick Setup Script

You can create the local environment files manually or use this template:

```bash
# Development
cat > .env.development.local << EOF
REACT_APP_API_BASE_URL=http://127.0.0.1:3000
REACT_APP_ENV=development
EOF

# Staging (if testing locally)
cat > .env.staging.local << EOF
REACT_APP_API_BASE_URL=https://staging-api.akavaacademy.com
REACT_APP_ENV=staging
EOF

# Production (if testing locally)
cat > .env.production.local << EOF
REACT_APP_API_BASE_URL=https://api.akavaacademy.com
REACT_APP_ENV=production
EOF
```

## Verifying Configuration

To verify which environment variables are being used:

1. Check the browser console - the API base URL is logged during initialization
2. Check Network tab - API requests should go to the configured base URL
3. Add temporary logging in `src/services/api.ts`:

```typescript
console.log('API Base URL:', API_BASE_URL);
console.log('Environment:', process.env.REACT_APP_ENV);
```

## Important Notes

- ⚠️ **Never commit `.env*.local` files** - they are in `.gitignore`
- ✅ **Do commit `env.template`** - it's a template file
- 🔒 **Keep production URLs secure** - don't share them publicly
- 🔄 **Rebuild after changing environment variables** - changes require a rebuild
- 🌐 **CORS Configuration** - Ensure your backend allows requests from all your domains

## Troubleshooting

### Variables not working?

1. Ensure variable names start with `REACT_APP_`
2. Restart the development server after creating `.env` files
3. Rebuild the app after changing Vercel environment variables
4. Check that you're using the correct environment file for your build mode

### Wrong API URL in production?

1. Verify Vercel environment variables are set correctly
2. Check that variables are set for the correct environment (Production/Preview)
3. Ensure you've redeployed after setting variables

