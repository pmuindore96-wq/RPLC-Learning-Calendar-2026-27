# RPLC Learning Calendar 2026-27
**Action for Social Advancement (ASA) - Regenerative Agriculture Training Platform**

A mobile-first, bilingual (English/Hindi) static website hosted on GitHub Pages providing agricultural training calendars focused on 7 core regenerative agriculture subtopics.

## 📋 Project Overview

This platform delivers month-by-month regenerative agriculture training guidance across:
- **Soil Health**
- **GHG Emission Reduction**
- **Living Income**
- **Water Management**
- **Preservation of Biodiversity**
- **Gender Equity**
- **Animal Welfare**

## 🎯 Key Features

✅ **Mobile-First Design** - Optimized for field trainers in rural areas  
✅ **Bilingual Support** - Instant EN/HI language toggle  
✅ **4-Tile Dashboard** - Color-coded monthly activities  
✅ **Responsive Grid** - Works on all devices  
✅ **Pure Static HTML** - No build process, GitHub Pages ready  
✅ **Accessible Navigation** - Accordion month selector & quick links  

## 📁 Repository Structure

```
RPLC-Learning-Calendar-2026-27/
├── index.html                 # Main entry point
├── README.md                  # Project documentation
├── css/
│   └── styles.css             # Custom CSS (optional enhancements)
├── js/
│   ├── app.js                 # Main application logic
│   ├── translations.js        # EN/HI language strings
│   └── calendar-data.js       # Monthly content & mapping
├── assets/
│   ├── icons/                 # SVG icons for tiles
│   ├── images/                # Hero images, illustrations
│   └── fonts/                 # Custom fonts (optional)
└── modules/                   # Markdown content modules
    ├── soil-health/
    ├── ghg-emissions/
    ├── living-income/
    ├── water-management/
    ├── biodiversity/
    ├── gender-equity/
    └── animal-welfare/
```

## 🚀 Quick Start

1. Clone the repository
2. Open `index.html` in a browser (or deploy via GitHub Pages)
3. Use the language toggle (EN/HI) to switch languages
4. Navigate months using the accordion menu
5. View training sessions, activities, and resources

## 🎨 Design System

| Component | Color | Purpose |
|-----------|-------|---------|
| Header | Dark Green (#1a5f3f) | Brand identity |
| Tile 1 | Green (#10b981) | Crop/Field Status |
| Tile 2 | Blue (#3b82f6) | Training Sessions |
| Tile 3 | Orange (#f97316) | Project Activities |
| Tile 4 | Purple (#a855f7) | Training Videos |

## 🌍 Localization

The platform uses a simple JSON-based translation system:
- **English (EN)** - Primary language
- **Hindi (HI)** - Localized agricultural terminology

Toggle available in header - no page reload required.

## 📱 Browser Compatibility

- Chrome/Chromium (Mobile & Desktop)
- Firefox (Mobile & Desktop)
- Safari (iOS 12+)
- Edge

## 🔗 Deployment

This site is configured for GitHub Pages deployment:
1. Push to the `main` branch
2. Navigate to repository Settings → Pages
3. Set source to `main` branch, root directory
4. Site deploys automatically at `https://pmuindore96-wq.github.io/RPLC-Learning-Calendar-2026-27/`

## 📚 Content Organization

Content is organized by:
- **Months** (January - December, aligned with agricultural seasons)
- **Subtopics** (7 core regenerative agriculture themes)
- **Activities** (4 tile categories per month)

See `calendar-data.js` for detailed month-to-topic mapping.

## ✨ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling (via CDN)
- **Vanilla JavaScript** - No frameworks
- **LocalStorage** - Language preference persistence

---

**Created by:** pmuindore96-wq  
**Purpose:** Supporting RPLC's Action for Social Advancement (ASA) initiative  
**Last Updated:** June 2026
