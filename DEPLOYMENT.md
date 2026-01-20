# Vercel Deployment Guide

## Vercel Settings

### Root Directory
- **MUST BE EMPTY** - Leave this field completely blank
- Your code is in the repository root, so no subdirectory is needed

### Build Settings (Auto-detected)
- **Framework Preset**: Next.js (Vercel will auto-detect)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Important Steps:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → General
   - Scroll to "Root Directory"
   - **Make sure it's EMPTY** (not filled with any path)
   - Click "Save"

2. **Build and Development Settings:**
   - Framework should show "Next.js"
   - If it doesn't, click "Override" and select "Next.js"
   - Build Command: `npm run build`
   - Output Directory: `.next` (or leave empty for auto-detect)

3. **Redeploy:**
   - Go to Deployments tab
   - Click "Redeploy" on the latest deployment
   - Or push a new commit to trigger a new deployment

## Troubleshooting 404 Errors

If you see "404: NOT_FOUND":
1. **Check Root Directory is empty** - This is the most common issue
2. Check deployment logs for build errors
3. Verify the GitHub repository is connected correctly
4. Make sure `package.json` has the correct build script

## Project Structure

Your project structure is correct:
```
/
├── app/          (Next.js App Router)
├── components/
├── lib/
├── public/
├── package.json
└── next.config.mjs
```

Since everything is in the root, Root Directory should be **empty**.
