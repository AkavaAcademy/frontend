# Vercel Deployment Checklist

## Pre-Deployment Checklist

- [x] `vercel.json` configuration file created
- [x] `.vercelignore` file created
- [x] API base URL configured to use environment variables
- [x] HTML meta tags updated
- [x] README updated with deployment instructions

## Deployment Steps

### 1. Prepare Your Repository
- [ ] Commit all changes
- [ ] Push to GitHub/GitLab/Bitbucket
- [ ] Ensure `package.json` has correct build scripts

### 2. Deploy to Vercel

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in or create an account

2. **Import Project**
   - Click "Add New Project"
   - Connect your Git provider
   - Select your repository
   - Vercel will auto-detect Create React App

3. **Configure Build Settings**
   - Framework Preset: Create React App (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `build` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Set Environment Variables**

   **For Production:**
   - Go to "Environment Variables" section
   - Add: `REACT_APP_API_BASE_URL`
   - Value: Your production backend URL (e.g., `https://api.akavaacademy.com`)
   - Apply to: **Production** only
   - Add: `REACT_APP_ENV`
   - Value: `production`
   - Apply to: **Production** only
   - Click "Save"

   **For Staging (Preview):**
   - Add: `REACT_APP_API_BASE_URL`
   - Value: Your staging backend URL (e.g., `https://staging-api.akavaacademy.com`)
   - Apply to: **Preview** only
   - Add: `REACT_APP_ENV`
   - Value: `staging`
   - Apply to: **Preview** only
   - Click "Save"

   **For Development (Optional):**
   - Add: `REACT_APP_API_BASE_URL`
   - Value: `http://127.0.0.1:3000` (or your local backend URL)
   - Apply to: **Development** only
   - Add: `REACT_APP_ENV`
   - Value: `development`
   - Apply to: **Development** only
   - Click "Save"

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project.vercel.app`

## Post-Deployment

### Verify Deployment
- [ ] Visit your deployed URL
- [ ] Test all routes (client-side routing should work)
- [ ] Test API calls (check browser console for errors)
- [ ] Verify environment variables are set correctly

### Backend Configuration
- [ ] Update CORS settings on backend to allow your Vercel domain
- [ ] Test API endpoints from deployed frontend
- [ ] Verify authentication flow works

### Custom Domain (Optional)
- [ ] Go to Project Settings > Domains
- [ ] Add your custom domain
- [ ] Configure DNS records as instructed
- [ ] Wait for SSL certificate (automatic)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18+ by default)

### API Calls Fail
- Verify `REACT_APP_API_BASE_URL` is set correctly
- Check backend CORS configuration
- Verify backend is accessible from internet
- Check browser console for specific error messages

### Routing Issues
- Verify `vercel.json` rewrites are correct
- Check that all routes redirect to `/index.html`
- Clear browser cache and try again

### Environment Variables Not Working
- Ensure variable name starts with `REACT_APP_`
- Rebuild after adding environment variables
- Check Vercel environment variable settings

## Environment Variables Reference

| Variable | Description | Development | Staging | Production |
|----------|-------------|-------------|---------|------------|
| `REACT_APP_API_BASE_URL` | Backend API base URL | `http://127.0.0.1:3000` | `https://staging-api.akavaacademy.com` | `https://api.akavaacademy.com` |
| `REACT_APP_ENV` | Environment identifier | `development` | `staging` | `production` |

## Staging Environment Setup

Vercel automatically creates preview deployments for pull requests and branches. To configure staging:

1. **Create a staging branch** (optional):
   ```bash
   git checkout -b staging
   git push origin staging
   ```

2. **Set Preview Environment Variables**:
   - In Vercel project settings → Environment Variables
   - Set variables for **Preview** environment
   - These will be used for all preview deployments (PRs, branches)

3. **Production Branch**:
   - Typically `main` or `master` branch
   - Uses **Production** environment variables
   - Auto-deploys on push to this branch

## Environment-Specific URLs

After deployment, you'll have:
- **Production**: `https://your-project.vercel.app` (main branch)
- **Staging/Preview**: `https://your-project-git-staging.vercel.app` (staging branch or PRs)
- **Development**: Local `http://localhost:3000` (local development)

See `ENV_SETUP.md` for detailed environment configuration guide.

## Support

For issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Check [Create React App Deployment](https://create-react-app.dev/docs/deployment/)

