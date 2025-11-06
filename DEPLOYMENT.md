# 🚀 GitHub Pages Deployment Guide

## ✅ Project Status: Ready to Deploy!

Your MCM Design Hub is built and ready for GitHub Pages. Here's what we've completed:

- ✅ Eleventy project configured
- ✅ Landing page with 6 sections built
- ✅ CSS styles and JavaScript functionality
- ✅ GitHub Actions workflow created
- ✅ Initial git commit completed
- ✅ Build tested successfully

---

## 📋 Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon (top-right) → **"New repository"**
3. Fill in details:
   - **Repository name:** `DesignStyle` (or your preferred name)
   - **Description:** Mid-Century Modern Design Hub
   - **Visibility:** Public
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

Copy and run these commands in your terminal:

```bash
cd /Users/agard/NJIT/is373/DesignStyle

# Add your GitHub repository as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/DesignStyle.git

# Push your code
git push -u origin main
```

**Example:** If your username is `kaw393939`:
```bash
git remote add origin https://github.com/kaw393939/DesignStyle.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section (left sidebar)
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
5. That's it! The workflow will automatically deploy

### Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait 1-2 minutes for completion (green checkmark)
4. Your site will be live at: `https://USERNAME.github.io/DesignStyle/`

---

## 🔍 Troubleshooting

### If the workflow fails:

1. Go to **Actions** tab
2. Click the failed workflow
3. Check the error message
4. Common issues:
   - **Permissions:** Settings → Actions → General → Workflow permissions → Enable "Read and write permissions"
   - **Pages not enabled:** Settings → Pages → Source: GitHub Actions

### If CSS/JS not loading:

1. Check your `site.json` - the `baseUrl` should match your repo name:
   ```json
   "baseUrl": "/DesignStyle/"
   ```
2. If your repo has a different name, update `src/_data/site.json`
3. Commit and push: `git add . && git commit -m "Fix base URL" && git push`

---

## 🧪 Test Locally First

Before deploying, you can test the site locally:

```bash
# Start development server
npm start

# Open in browser: http://localhost:8080
```

Test checklist:
- [ ] Homepage loads
- [ ] Color palette generator works (click "Generate New Palette")
- [ ] Click swatches to copy colors
- [ ] Newsletter form validation works
- [ ] All buttons are clickable
- [ ] Responsive on mobile (resize browser)

---

## 📝 Update Site Configuration

Before deploying, you may want to update:

### `src/_data/site.json`
```json
{
  "name": "MCM Design Hub",
  "description": "Educational platform for Mid-Century Modern design",
  "url": "https://YOUR_USERNAME.github.io/DesignStyle",
  "baseUrl": "/DesignStyle/",
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com"
  }
}
```

---

## 🎉 After Deployment

Once deployed, your site will be live at:
```
https://YOUR_USERNAME.github.io/DesignStyle/
```

### Share your work:
- Tweet the link
- Add it to your LinkedIn
- Share in design communities

### Next steps:
- Add real furniture images
- Create Learn section pages
- Build Explore gallery
- Develop Practice tools

---

## 🔄 Making Updates

After initial deployment, any time you push to `main` branch, the site automatically rebuilds:

```bash
# Make your changes to files
git add .
git commit -m "Description of changes"
git push
```

Wait 1-2 minutes and your changes will be live!

---

## 📊 Monitoring

- **View deployments:** Actions tab
- **Check status:** Settings → Pages
- **Analytics:** Consider adding Google Analytics or Plausible

---

## 🆘 Need Help?

If you encounter issues:

1. **Check build logs:** Actions tab → Click workflow run
2. **Verify Pages settings:** Settings → Pages
3. **Test locally first:** `npm start`
4. **Check browser console:** F12 → Console tab for JavaScript errors

---

## Quick Reference

### Common Commands

```bash
# Local development
npm start                    # Start dev server
npm run build               # Build for production
npm run clean               # Clean build directory

# Git commands
git status                  # Check what's changed
git add .                   # Stage all changes
git commit -m "message"     # Commit changes
git push                    # Push to GitHub (triggers deploy)
git pull                    # Pull latest changes

# View build output
ls -la _site/              # See what was built
```

---

## ✅ Deployment Checklist

Before you push to GitHub:

- [ ] Update `src/_data/site.json` with your info
- [ ] Test locally with `npm start`
- [ ] Color generator works
- [ ] Newsletter form validates
- [ ] All links work (even if they go to placeholder pages)
- [ ] No console errors in browser
- [ ] Build succeeds with `npm run build`
- [ ] Git commit created
- [ ] Ready to create GitHub repo!

---

**You're all set! Follow the steps above to deploy your site.** 🚀

Need me to help with anything else? Just ask!
