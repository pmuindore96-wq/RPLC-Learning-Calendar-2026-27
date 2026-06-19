# GitHub Pages Setup Guide

## Overview
This document provides step-by-step instructions for setting up GitHub Pages for the RPLC Learning Calendar.

---

## Prerequisites

✅ **Required:**
- GitHub account
- Repository created (pmuindore96-wq/RPLC-Learning-Calendar-2026-27)
- At least one commit pushed to main branch

✅ **Already Configured:**
- `index.html` in root directory
- `_config.yml` for GitHub Pages settings
- `.nojekyll` to skip Jekyll processing (optional but recommended)

---

## Step-by-Step Setup

### Step 1: Navigate to Repository Settings

1. Go to: https://github.com/pmuindore96-wq/RPLC-Learning-Calendar-2026-27
2. Click **Settings** (right side, below the repository name)
3. Scroll to **Pages** section in left sidebar

### Step 2: Configure Source Branch

1. Under "Build and deployment" section
2. **Source:** Select dropdown
3. Choose: **Deploy from a branch**
4. **Branch:** Select `main`
5. **Folder:** Select `/ (root)`
6. Click **Save**

### Step 3: Enable HTTPS (Recommended)

1. Wait for GitHub to process (1-2 minutes)
2. Refresh the page
3. Check: **"Enforce HTTPS"** checkbox
4. Save if changed

### Step 4: Verify Deployment

1. Look for message: **"Your site is live at..."**
2. URL will be: `https://pmuindore96-wq.github.io/RPLC-Learning-Calendar-2026-27/`
3. Copy this URL
4. Visit the URL to verify site is live
5. It may take 1-2 minutes for initial deployment

---

## Configuration Files Explained

### `_config.yml`
GitHub Pages configuration file that sets:
- Site title and description
- Base URL for the site
- Build preferences
- Excludes (files GitHub Pages ignores)

**Key settings:**
```yaml
title: RPLC Learning Calendar 2026-27
baseurl: /RPLC-Learning-Calendar-2026-27
theme: null  # We don't use Jekyll theme
```

### `.nojekyll`
Empty file that tells GitHub Pages to:
- Skip Jekyll processing
- Serve HTML/CSS/JS as-is
- Faster deployment
- No magic file transformations

**Why we use it:**
- We don't need Jekyll (static site generator)
- We're using vanilla HTML/CSS/JS
- Faster and simpler deployment

---

## Automatic Deployments

Once GitHub Pages is configured:

### What Happens Automatically

**When you push to main branch:**
```bash
git add .
git commit -m "Update content"
git push origin main
```

**GitHub automatically:**
1. Detects changes to main branch
2. Builds the site
3. Deploys to GitHub Pages
4. Takes 30 seconds - 2 minutes

### Check Deployment Status

1. Go to **Actions** tab in repository
2. Look for most recent workflow run
3. Green checkmark = successful deployment
4. Red X = build failed (check logs)

### View Build Logs

1. Click on workflow run in **Actions** tab
2. Expand "Build and deploy" job
3. See deployment details
4. Debug errors if any

---

## Custom Domain Setup (Optional)

If you want to use a custom domain like `rplc.org` instead of `github.io`:

### Step 1: Create CNAME File

1. Create file named `CNAME` in repository root
2. Add your domain (one line only):
   ```
   yourdomain.com
   ```
3. Commit and push:
   ```bash
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

### Step 2: Configure DNS

At your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Using CNAME (recommended for subdomains)**
```
Type:  CNAME
Name:  www
Value: pmuindore96-wq.github.io
TTL:   3600
```

**Option B: Using A Records (for root domain)**
```
Type: A
Name: @
IPs:  185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
TTL:  3600
```

### Step 3: Update GitHub Pages Settings

1. Go to Settings → Pages
2. Under "Custom domain"
3. Enter your domain name
4. Click **Save**
5. GitHub will verify DNS
6. Enable HTTPS when available (might take a few minutes)

### Step 4: Verify Custom Domain

1. Wait 5-10 minutes for DNS propagation
2. Visit your custom domain
3. HTTPS should be available shortly
4. Auto-redirects from old GitHub URL to custom domain

---

## Troubleshooting GitHub Pages

### Issue: "404 Not Found"

**Possible causes:**
- Repository is private (make it public)
- GitHub Pages not enabled
- index.html missing from root
- Waiting too long (wait 5 minutes)

**Solutions:**
```bash
# Verify index.html exists
ls index.html

# Check it's in the repository
git log --oneline -- index.html

# Force a redeploy by committing
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

### Issue: "Failed to build"

**Possible causes:**
- Syntax errors in HTML
- Invalid YAML in _config.yml
- File encoding issues

**Solutions:**
1. Check GitHub Actions logs for error details
2. Validate HTML: https://validator.w3.org/
3. Validate YAML: https://www.yamllint.com/
4. Fix errors locally and push again

### Issue: "Site not updating"

**Possible causes:**
- Browser cache not cleared
- Waiting for deployment
- Changes to wrong branch

**Solutions:**
```bash
# Clear browser cache (Ctrl+Shift+Delete)
# Or use incognito mode

# Check deployment status in Actions
# Wait for green checkmark

# Verify you're pushing to main branch
git branch
git push origin main
```

### Issue: "Base URL issues"

**Problem:** Links/resources show 404 on live site

**Solution:** Update baseurl in `_config.yml`:
```yaml
baseurl: /RPLC-Learning-Calendar-2026-27
```

Then reference assets relatively in HTML:
```html
<script src="assets/js/app.js"></script>
```

---

## Best Practices

### Performance
- ✅ Keep repository size small
- ✅ Compress images
- ✅ Use CDN for libraries (Tailwind CSS)
- ✅ Minimize CSS/JS locally before upload

### Security
- ✅ Keep repository public if using GitHub Pages
- ✅ Don't commit sensitive data
- ✅ Use HTTPS (automatic with GitHub Pages)
- ✅ Review pull requests before merge

### Maintenance
- ✅ Use descriptive commit messages
- ✅ Create releases for versions
- ✅ Document changes in README
- ✅ Test locally before pushing

---

## Advanced Configuration

### Environment Variables (if needed)
```yaml
# In _config.yml
env: production
```

### Build Timeout
GitHub Pages auto-cancels builds > 10 minutes
(Not an issue for static sites like ours)

### Bandwidth Limit
GitHub Pages has soft limit of 100GB/month
(More than enough for a learning platform)

---

## Monitoring Live Site

### Browser Console Check
```javascript
// Open browser console (F12)
// Look for errors in Console tab
// Check Network tab for failed requests
```

### Check GitHub Actions
```
1. Go to Actions tab
2. View most recent workflows
3. All should show green checkmarks
```

### Monitor Uptime (Optional)

Services like Uptime Robot can monitor availability:
1. Create free account: https://uptimerobot.com/
2. Add monitor for your GitHub Pages URL
3. Get alerts if site goes down

---

## Documentation Resources

- GitHub Pages Docs: https://pages.github.com/
- GitHub Pages Troubleshooting: https://docs.github.com/en/pages
- Jekyll (Jekyll docs): https://jekyllrb.com/
- YAML Spec: https://yaml.org/

---

## Quick Reference

| Task | Command |
|------|----------|
| Clone repo | `git clone https://github.com/pmuindore96-wq/RPLC-Learning-Calendar-2026-27.git` |
| View site | https://pmuindore96-wq.github.io/RPLC-Learning-Calendar-2026-27/ |
| Update content | Edit files → `git push` → Auto-deployed |
| Check build | Go to Actions tab → Latest workflow |
| Clear cache | Press Ctrl+Shift+Delete in browser |
| Force redeploy | `git commit --allow-empty -m "Redeploy"` → `git push` |

---

**Document Version:** 1.0  
**Last Updated:** June 2026  
**GitHub Pages Status:** ✅ Ready for Production
