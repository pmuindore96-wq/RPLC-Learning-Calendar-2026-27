# RPLC Learning Calendar - Implementation Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [System Architecture](#system-architecture)
3. [File Structure](#file-structure)
4. [Setup Instructions](#setup-instructions)
5. [Customization Guide](#customization-guide)
6. [GitHub Pages Deployment](#github-pages-deployment)
7. [Troubleshooting](#troubleshooting)
8. [Maintenance & Updates](#maintenance--updates)

---

## Quick Start

### For End Users
1. **Visit the Website:** https://pmuindore96-wq.github.io/RPLC-Learning-Calendar-2026-27/
2. **Select Month:** Use the monthly accordion in the sidebar
3. **Switch Language:** Click EN/HI toggle in header
4. **View Content:** Navigate using 4-tile dashboard
5. **Access Resources:** Use quick links for training materials

### For Developers/Maintainers
1. Clone the repository
2. Make changes locally in your code editor
3. Test in browser (no build process needed)
4. Push to GitHub main branch
5. GitHub Pages auto-deploys within seconds

---

## System Architecture

### Frontend Stack
- **HTML5:** Semantic markup for accessibility
- **Tailwind CSS:** Utility-first styling via CDN
- **Vanilla JavaScript:** No frameworks, pure ES6+
- **LocalStorage:** Language preference persistence

### Module Structure
```
Application Flow:
┌─────────────────────────────────────────────────────┐
│      index.html (Entry Point)       │
└─────────────────────────────────────┬───────────────┘
                 │
        ┌────────────────┬──────────────────────┐
        │                │
   ┌────┴────┐    ┌──────────┐
   │Language  │    │  Calendar   │
   │Manager   │    │  Manager    │
   └────┬────┘    └──────────┘
        │                 │
   ┌────┴────────────────┴──────────┐
   │    Accordion Manager         │
   └────┬────────────────┬─────────┘
        │                  │
   ┌────┴────┐      ┌────────────┐
   │Data      │      │  DOM Update  │
   │Loader    │      │  (Sections)  │
   └──────────┘      └──────────────┘
```

### Data Flow
1. **User Action** (month click, language toggle)
2. **Event Emission** (custom events)
3. **Module Response** (calendar updates)
4. **Data Loading** (month data from data-loader.js)
5. **DOM Rendering** (content displayed)
6. **Storage** (preferences saved to localStorage)

---

## File Structure

### Root Level
```
index.html                          # Main entry point
README.md                          # Project overview
CONTENT_MAPPING_SCHEMA.md          # Detailed topic mapping
IMPLEMENTATION_GUIDE.md            # This file
_config.yml                        # GitHub Pages config
.nojekyll                          # Disable Jekyll processing
```

### Assets Directory
```
assets/
├── css/
│   └── style.css                 # Custom CSS enhancements
├── js/
│   ├── language.js               # Language switching logic
│   ├── calendar.js               # Month/season management
│   ├── accordion.js              # Menu navigation
│   ├── data-loader.js            # Monthly content data
│   └��─ app.js                    # App initialization
├── icons/
│   └── (SVG icons - optional)
├── images/
│   └── (Logo, banners - optional)
└── fonts/
    └── (Custom fonts - optional)
```

### Optional Directories
```
data/                              # JSON data files (future)
modules/                           # Markdown content by month
pages/                             # Additional pages (onboarding, etc.)
docs/                              # PDF guides & documentation
```

---

## Setup Instructions

### Prerequisites
- Git account (GitHub)
- Code editor (VS Code, Sublime, etc.)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend, build tools, or Node.js required ✨

### Local Development Setup

**Step 1: Clone Repository**
```bash
git clone https://github.com/pmuindore96-wq/RPLC-Learning-Calendar-2026-27.git
cd RPLC-Learning-Calendar-2026-27
```

**Step 2: Open in Browser**
```bash
# Option A: Direct file open
open index.html

# Option B: Python simple server
python -m http.server 8000
# Visit: http://localhost:8000

# Option C: VS Code Live Server
# Install extension, right-click index.html > Open with Live Server
```

**Step 3: Verify Functionality**
- ✅ Page loads with current month
- ✅ Language toggle switches between EN/HI
- ✅ Sidebar months are clickable
- ✅ Content sections update when month changes
- ✅ Mobile responsive on small screens

### Production Deployment

**Step 1: Configure GitHub Pages**
```
1. Go to Repository Settings
2. Navigate to Pages (left sidebar)
3. Select Source: main branch, root directory
4. Save
5. Wait 1-2 minutes for deployment
```

**Step 2: Verify Deployment**
- Visit: https://pmuindore96-wq.github.io/RPLC-Learning-Calendar-2026-27/
- Check that site loads and is functional
- Share URL with stakeholders

**Step 3: Set Up Custom Domain (Optional)**
```
1. Add CNAME file with your domain
2. Configure DNS records with GitHub
3. Enable HTTPS in Pages settings
```

---

## Customization Guide

### Adding/Editing Monthly Content

**File:** `assets/js/data-loader.js`

**Format:**
```javascript
const monthlyData = {
  0: { // January (0-based indexing)
    cropStatus: "Your text here",
    training: [
      { title: "Training Name", duration: "X hours", type: "practical|theory" }
    ],
    activities: [
      "Activity 1",
      "Activity 2"
    ],
    videos: [
      { title: "Video Title", duration: "X min" }
    ]
  },
  // ... repeat for months 1-11
};
```

### Changing Colors

**Header Color:**
Edit `index.html` header class:
```html
<header class="bg-gradient-to-r from-green-800 to-green-700"> <!-- Change green to other colors -->
```

Tailwind color options: `red`, `blue`, `purple`, `yellow`, `pink`, `indigo`, etc.

**Tile Colors:**
```html
<!-- Green tile (Crop Status) -->
<div class="bg-gradient-to-br from-green-500 to-green-600">...</div>

<!-- Blue tile (Training) -->
<div class="bg-gradient-to-br from-blue-500 to-blue-600">...</div>

<!-- Orange tile (Activities) -->
<div class="bg-gradient-to-br from-orange-500 to-orange-600">...</div>

<!-- Purple tile (Videos) -->
<div class="bg-gradient-to-br from-purple-500 to-purple-600">...</div>
```

### Adding New Languages

**File:** `assets/js/language.js`

```javascript
const translations = {
  en: { /* English translations */ },
  hi: { /* Hindi translations */ },
  // Add new language:
  ta: { // Tamil example
    sidebarMonthTitle: "மாத திட்டம்",
    quickLinksTitle: "விரைவு இணைப்புகள்",
    // ... all other keys
  }
};
```

**Add Language Button in Header:**
```html
<button id="langTA" class="language-toggle px-3 py-1 rounded text-sm" data-lang="ta">TA</button>
```

### Updating Translations

**File:** `assets/js/language.js`

Locate the `translations.hi` object and update any text:
```javascript
hi: {
  sidebarMonthTitle: "आपका हिंदी पाठ यहां",
  // ...
}
```

### Adding New Sections

**Step 1:** Add HTML section in `index.html`:
```html
<section id="newSection" class="bg-white rounded-lg shadow-md p-6 mb-6">
  <h2 class="text-2xl font-bold text-green-700 mb-4">
    <i class="fas fa-icon"></i>
    <span id="newSectionTitle">New Section</span>
  </h2>
  <div id="newSectionContent"></div>
</section>
```

**Step 2:** Add translation key in `language.js`:
```javascript
const translations = {
  en: { newSectionTitle: "New Section", ... },
  hi: { newSectionTitle: "नया अनुभाग", ... }
};
```

**Step 3:** Add data in `data-loader.js`:
```javascript
const monthlyData = {
  0: {
    // ... existing data ...
    newSection: "Content for this month"
  }
};
```

**Step 4:** Render in `data-loader.js`:
```javascript
renderNewSection(content) {
  const container = document.getElementById('newSectionContent');
  if (container) {
    container.innerHTML = `<p>${content}</p>`;
  }
}
```

### Adding Icons

Using Font Awesome (already included via CDN):
```html
<!-- Examples -->
<i class="fas fa-leaf"></i>          <!-- Leaf -->
<i class="fas fa-water"></i>         <!-- Water -->
<i class="fas fa-bug"></i>           <!-- Insect -->
<i class="fas fa-cow"></i>           <!-- Cow -->
<i class="fas fa-female"></i>        <!-- Woman -->
<i class="fas fa-dollar-sign"></i>   <!-- Income -->
<i class="fas fa-wind"></i>          <!-- GHG -->
```

Find more icons: https://fontawesome.com/icons

---

## GitHub Pages Deployment

### Automatic Deployment

Once configured, deployment happens automatically:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **GitHub Actions runs** (automatically)
   - Takes 30 seconds - 2 minutes

3. **Site updates live**
   - Visit: https://pmuindore96-wq.github.io/RPLC-Learning-Calendar-2026-27/

### Check Deployment Status

1. Go to repository → Settings → Pages
2. Look for "Your site is published at..."
3. Check "Build and deployment" logs if issues

### Custom Domain Setup

**Step 1:** Create CNAME file in root:
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

**Step 2:** Configure DNS at your registrar:
```
Type: A
Host: @
Points to: 185.199.108.153
         185.199.109.153
         185.199.110.153
         185.199.111.153

OR

Type: CNAME
Host: www
Points to: pmuindore96-wq.github.io
```

**Step 3:** Enable HTTPS in Pages settings

---

## Troubleshooting

### Issue: Site doesn't load
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check GitHub Pages is enabled in Settings
- Verify main branch has index.html
- Wait 2-3 minutes for deployment

### Issue: Language toggle doesn't work
**Solution:**
- Check browser console for errors (F12)
- Verify `language.js` is loaded
- Check localStorage isn't disabled
- Try incognito/private mode

### Issue: Images don't display
**Solution:**
- Verify image file paths are correct
- Use relative paths: `assets/images/image.jpg`
- Ensure images are committed to git
- Check file permissions

### Issue: Styles look different locally vs. deployed
**Solution:**
- Clear browser cache
- Verify Tailwind CDN is loading (check Network tab)
- Check for CSS conflicts in style.css
- Ensure all CSS classes are spelled correctly

### Issue: Months don't change when clicked
**Solution:**
- Open browser console (F12)
- Look for JavaScript errors
- Verify `calendar.js` is loaded
- Check `data-loader.js` monthlyData structure

### Issue: Mobile menu doesn't work
**Solution:**
- Check viewport meta tag is in index.html
- Verify `accordion.js` is loaded
- Test in actual mobile device or Chrome DevTools
- Clear localStorage and reload

---

## Maintenance & Updates

### Monthly Content Updates

**Frequency:** Before each month begins

**Steps:**
1. Edit `assets/js/data-loader.js`
2. Update `monthlyData` for upcoming month
3. Update translations if needed
4. Test locally
5. Push to GitHub

### Security Best Practices

- ✅ Keep GitHub account secure (strong password, 2FA)
- ✅ Review pull requests before merging
- ✅ Don't commit sensitive information
- ✅ Use .gitignore for local files
- ✅ Archive old backups

### Performance Optimization

- **Lazy load images:** (if added in future)
  ```html
  <img src="image.jpg" loading="lazy">
  ```

- **Minimize JavaScript:** (already minimal)

- **Use CDN:** (Tailwind already via CDN)

- **Cache busting:** Add version to assets if needed:
  ```html
  <link rel="stylesheet" href="assets/css/style.css?v=1.0.1">
  ```

### Backup Strategy

```bash
# GitHub automatically maintains version history
# Additional backup:
git clone --mirror https://github.com/pmuindore96-wq/RPLC-Learning-Calendar-2026-27.git
```

### Version Management

Update version in file headers:

**File:** `index.html` (in comments)
```html
<!-- Version: 1.1.0 -->
<!-- Last Updated: June 2026 -->
```

**File:** `README.md`
```markdown
**Version:** 1.1.0
**Last Updated:** June 2026
```

### Analytics (Optional)

To add Google Analytics:

**Step 1:** Get tracking ID from Google Analytics

**Step 2:** Add to `index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Support & Contact

**Issues?**
1. Check [Troubleshooting](#troubleshooting) section
2. Review GitHub Issues
3. Contact: pmuindore96@gmail.com

**Want to contribute?**
1. Fork repository
2. Create feature branch
3. Make changes
4. Submit pull request
5. Include description of changes

---

**Document Version:** 1.0  
**Last Updated:** June 2026  
**Maintained by:** RPLC Team
