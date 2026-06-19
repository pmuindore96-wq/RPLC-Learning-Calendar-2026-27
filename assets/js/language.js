/**
 * Language Management System
 * Handles EN/HI language switching with localStorage persistence
 */

const translations = {
  en: {
    // Header
    sidebarMonthTitle: "Monthly Plan",
    quickLinksTitle: "Quick Links",
    linkOnboarding: "VRP Onboarding",
    linkRoles: "VRP Role Definition",
    linkDiary: "Farm Diary",
    linkInspection: "Compliance Checklist",
    
    // Tiles
    tile1Title: "Crop Status",
    tile1Desc: "Current Field Condition",
    tile2Title: "Training",
    tile2Desc: "Learning Sessions",
    tile3Title: "Activities",
    tile3Desc: "Field Work Plan",
    tile4Title: "Videos",
    tile4Desc: "Training Resources",
    
    // Sections
    cropStatusTitle: "Crop & Field Status",
    cropStatusTip: "Tip:",
    cropStatusTipText: "Regular soil monitoring ensures optimal plant growth.",
    trainingTitle: "Training Sessions",
    activitiesTitle: "Field Activities",
    videosTitle: "Training Videos",
    topicsTitle: "7 Regenerative Agriculture Topics",
    
    // Footer
    footerAbout: "About",
    footerAboutText: "Supporting RPLC's Action for Social Advancement (ASA) initiative through regenerative agriculture training.",
    footerResources: "Resources",
    footerGuide: "User Guide",
    footerContact: "Contact Us",
    footerFeedback: "Feedback",
    footerContactTitle: "Contact",
    footerEmail: "Email: info@rplc.org",
    footerPhone: "Phone: +91-XXXX-XXXX",
    footerCopy: "© 2026 RPLC Learning Calendar. All rights reserved.",
    
    // Months
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    
    // Seasons
    rabiSeason: "Rabi Season",
    kharifSeason: "Kharif Season",
    zaidSeason: "Zaid Season"
  },
  
  hi: {
    // Header
    sidebarMonthTitle: "मासिक योजना",
    quickLinksTitle: "त्वरित लिंक",
    linkOnboarding: "वीआरपी प्रशिक्षण",
    linkRoles: "वीआरपी भूमिका परिभाषा",
    linkDiary: "खेत की डायरी",
    linkInspection: "अनुपालन चेकलिस्ट",
    
    // Tiles
    tile1Title: "फसल की स्थिति",
    tile1Desc: "वर्तमान खेत की स्थिति",
    tile2Title: "प्रशिक्षण",
    tile2Desc: "सीखने की सेशन",
    tile3Title: "कार्यकलाप",
    tile3Desc: "खेत कार्य योजना",
    tile4Title: "वीडियो",
    tile4Desc: "प्रशिक्षण संसाधन",
    
    // Sections
    cropStatusTitle: "फसल और खेत की स्थिति",
    cropStatusTip: "सुझाव:",
    cropStatusTipText: "नियमित मिट्टी की निगरानी इष्टतम पौधों की वृद्धि सुनिश्चित करती है।",
    trainingTitle: "प्रशिक्षण सेशन",
    activitiesTitle: "खेत कार्यकलाप",
    videosTitle: "प्रशिक्षण वीडियो",
    topicsTitle: "7 पुनर्जनक कृषि विषय",
    
    // Footer
    footerAbout: "परिचय",
    footerAboutText: "पुनर्जनक कृषि प्रशिक्षण के माध्यम से आरपीएलसी की सामाजिक उन्नति पहल का समर्थन करना।",
    footerResources: "संसाधन",
    footerGuide: "उपयोगकर्ता गाइड",
    footerContact: "हमसे संपर्क करें",
    footerFeedback: "प्रतिक्रिया",
    footerContactTitle: "संपर्क",
    footerEmail: "ईमेल: info@rplc.org",
    footerPhone: "फोन: +91-XXXX-XXXX",
    footerCopy: "© 2026 आरपीएलसी लर्निंग कैलेंडर। सर्वाधिकार सुरक्षित।",
    
    // Months
    months: [
      "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
      "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
    ],
    
    // Seasons
    rabiSeason: "रबी सीजन",
    kharifSeason: "खरीफ सीजन",
    zaidSeason: "जैद सीजन"
  }
};

// Initialize Language System
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.init();
  }
  
  init() {
    this.setActiveButton();
    this.applyTranslations();
    this.attachEventListeners();
  }
  
  setActiveButton() {
    document.querySelectorAll('.language-toggle').forEach(btn => {
      btn.classList.remove('active', 'bg-white', 'text-green-700');
      if (btn.dataset.lang === this.currentLanguage) {
        btn.classList.add('active', 'bg-white', 'text-green-700');
      }
    });
  }
  
  applyTranslations() {
    const trans = translations[this.currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (trans[key]) {
        el.textContent = trans[key];
      }
    });
    
    // Update all elements with id matching translation keys
    Object.keys(trans).forEach(key => {
      const el = document.getElementById(key);
      if (el) {
        el.textContent = trans[key];
      }
    });
    
    // Set document language
    document.documentElement.lang = this.currentLanguage;
    
    // Emit custom event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLanguage } }));
  }
  
  attachEventListeners() {
    document.querySelectorAll('.language-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.setLanguage(btn.dataset.lang);
      });
    });
  }
  
  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      this.setActiveButton();
      this.applyTranslations();
    }
  }
  
  get(key) {
    return translations[this.currentLanguage][key] || key;
  }
}

// Initialize on page load
const languageManager = new LanguageManager();
