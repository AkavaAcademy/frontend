# Environment URLs Reference

Quick reference for environment-specific backend URLs.

## Environment Configuration

### Development (Local)
- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://127.0.0.1:3000`
- **File**: `.env.development.local`
- **Usage**: Local development on your machine

### Staging
- **Frontend**: `https://your-project-git-staging.vercel.app` (or custom staging domain)
- **Backend API**: `https://staging-api.akavaacademy.com` (replace with your staging backend URL)
- **File**: `.env.staging.local` (local) or Vercel Preview environment variables
- **Usage**: Testing before production deployment

### Production
- **Frontend**: `https://your-project.vercel.app` (or custom production domain)
- **Backend API**: `https://api.akavaacademy.com` (replace with your production backend URL)
- **File**: `.env.production.local` (local) or Vercel Production environment variables
- **Usage**: Live production environment

## Quick Setup Commands

### Create Local Environment Files

**Development:**
```bash
echo "REACT_APP_API_BASE_URL=http://127.0.0.1:3000
REACT_APP_ENV=development" > .env.development.local
```

**Staging (for local testing):**
```bash
echo "REACT_APP_API_BASE_URL=https://staging-api.akavaacademy.com
REACT_APP_ENV=staging" > .env.staging.local
```

**Production (for local testing):**
```bash
echo "REACT_APP_API_BASE_URL=https://api.akavaacademy.com
REACT_APP_ENV=production" > .env.production.local
```

## Vercel Environment Variables

Set these in Vercel Dashboard → Project Settings → Environment Variables:

| Environment | REACT_APP_API_BASE_URL | REACT_APP_ENV |
|-------------|------------------------|---------------|
| **Development** | `http://127.0.0.1:3000` | `development` |
| **Preview** (Staging) | `https://staging-api.akavaacademy.com` | `staging` |
| **Production** | `https://api.akavaacademy.com` | `production` |

## Notes

- Replace placeholder URLs (`staging-api.akavaacademy.com`, `api.akavaacademy.com`) with your actual backend URLs
- All `.env*.local` files are gitignored and should NOT be committed
- Vercel environment variables override local files for deployments
- See `ENV_SETUP.md` for detailed setup instructions

