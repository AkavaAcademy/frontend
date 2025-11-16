# Akava Academy Frontend

Frontend application for Akava Academy - a programming and technology education platform for children and students aged 6-18.

## Tech Stack

- **React 19** with TypeScript
- **React Router** for routing
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Axios** for API calls
- **i18next** for internationalization

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
The build is minified and optimized for best performance.

## Environment Variables

This project supports three environments: **development**, **staging**, and **production**.

### Quick Setup

1. **Development** (Local):
   - Create `.env.development.local` with your local backend URL
   - See `env.template` for template

2. **Staging & Production**:
   - Set environment variables in Vercel dashboard
   - Or create `.env.staging.local` / `.env.production.local` for local testing

### Documentation

- 📋 **`ENV_SETUP.md`** - Detailed environment setup guide
- 🔗 **`ENV_URLS.md`** - Quick reference for environment URLs
- 📝 **`env.template`** - Template file with all environment configurations

**Important**: All `.env*.local` files are gitignored. Never commit them!

## Deployment to Vercel

This project is configured for deployment on Vercel.

### Prerequisites

1. A Vercel account ([vercel.com](https://vercel.com))
2. Your backend API URL (for production)

### Deployment Steps

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import project to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Create React App

3. **Configure Environment Variables:**
   - In Vercel project settings, go to "Environment Variables"
   - Add: `REACT_APP_API_BASE_URL` with your production backend URL
   - Example: `https://api.akavaacademy.com`
   - Make sure to set it for "Production", "Preview", and "Development" environments

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app
   - Your app will be available at `https://your-project.vercel.app`

### Vercel Configuration

The project includes:
- `vercel.json` - Vercel configuration with routing and caching
- `.vercelignore` - Files to exclude from deployment

### Important Notes

- **Backend API URL**: Make sure to set `REACT_APP_API_BASE_URL` in Vercel environment variables
- **CORS**: Ensure your backend allows requests from your Vercel domain
- **HTTPS**: Vercel automatically provides HTTPS certificates
- **Routing**: Client-side routing is configured via `vercel.json` rewrites

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Development

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```env
   REACT_APP_API_BASE_URL=http://127.0.0.1:3000
   ```

3. Start development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── components/     # React components
├── contexts/       # React contexts (Auth, etc.)
├── services/       # API services
├── i18n/          # Internationalization files
└── assets/        # Static assets
```

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Vercel Documentation](https://vercel.com/docs)
