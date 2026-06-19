/**
 * Main Application Initialization
 * Orchestrates all modules and handles smooth interactions
 */

class RPLCApp {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupScrollBehavior();
    this.setupResponsive();
    this.logInitialization();
  }
  
  setupScrollBehavior() {
    // Smooth scroll to sections from tiles
    window.scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }
  
  setupResponsive() {
    // Handle responsive sidebar on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 768) {
          document.getElementById('sidebar').classList.remove('hidden');
          document.getElementById('sidebarOverlay').classList.add('hidden');
        }
      }, 250);
    });
  }
  
  logInitialization() {
    console.log('✅ RPLC Learning Calendar initialized');
    console.log(`📅 Current Month: ${calendarManager.getMonthName()}`);
    console.log(`🌍 Language: ${languageManager.currentLanguage.toUpperCase()}`);
    console.log(`🌾 Season: ${calendarManager.getSeasonName()}`);
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new RPLCApp();
  });
} else {
  new RPLCApp();
}
