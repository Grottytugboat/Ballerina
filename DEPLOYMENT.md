# Vercel Deployment Guide

## Vercel Settings

### Root Directory
- **Leave empty** (since all code is in the repository root)

### Build Settings
- **Framework Preset**: Next.js (should auto-detect)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

### Environment Variables
- None required for this project

## Deployment Checklist

1. ✅ Root Directory: Leave empty
2. ✅ Framework: Next.js (auto-detected)
3. ✅ Build Command: `npm run build`
4. ✅ Node.js Version: 18.x or higher (Vercel auto-detects)

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify `next.config.mjs` exists
4. Check that `public` folder contains all assets

## Notes

- The project uses Next.js 14 App Router
- All pages are server-rendered by default
- Video file (`hero-video.mp4`) is in `public` folder and will be served automatically
- Images in `public/images` are accessible at `/images/...`
