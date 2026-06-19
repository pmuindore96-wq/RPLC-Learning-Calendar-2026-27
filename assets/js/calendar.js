/**
 * Calendar Management System
 * Handles month navigation and season detection
 */

class CalendarManager {
  constructor() {
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();
    this.seasons = {
      rabi: [0, 1, 2, 3],        // Jan, Feb, Mar, Apr
      kharif: [4, 5, 6, 7, 8],   // May, Jun, Jul, Aug, Sep
      zaid: [9, 10, 11]          // Oct, Nov, Dec
    };
    this.init();
  }
  
  init() {
    this.updateDisplay();
    window.addEventListener('languageChanged', () => this.updateDisplay());
  }
  
  getCurrentSeason() {
    for (let [season, months] of Object.entries(this.seasons)) {
      if (months.includes(this.currentMonth)) {
        return season;
      }
    }
    return 'rabi';
  }
  
  getSeasonName(season = null) {
    season = season || this.getCurrentSeason();
    const lang = languageManager.currentLanguage;
    const seasonMap = {
      rabi: lang === 'en' ? 'Rabi Season' : 'रबी सीजन',
      kharif: lang === 'en' ? 'Kharif Season' : 'खरीफ सीजन',
      zaid: lang === 'en' ? 'Zaid Season' : 'जैद सीजन'
    };
    return seasonMap[season] || 'Rabi Season';
  }
  
  getMonthName(monthIndex = null) {
    monthIndex = monthIndex !== null ? monthIndex : this.currentMonth;
    const trans = translations[languageManager.currentLanguage];
    return trans.months[monthIndex];
  }
  
  setMonth(monthIndex) {
    if (monthIndex >= 0 && monthIndex < 12) {
      this.currentMonth = monthIndex;
      this.updateDisplay();
      window.dispatchEvent(new CustomEvent('monthChanged', { detail: { month: monthIndex } }));
    }
  }
  
  updateDisplay() {
    const monthName = this.getMonthName();
    const seasonName = this.getSeasonName();
    const fullDisplay = `${monthName} ${this.currentYear}`;
    
    // Update header
    const currentMonthEl = document.getElementById('currentMonth');
    if (currentMonthEl) currentMonthEl.textContent = fullDisplay;
    
    const currentSeasonEl = document.getElementById('currentSeason');
    if (currentSeasonEl) currentSeasonEl.textContent = seasonName;
  }
  
  getMonthData() {
    // This will be populated by data-loader.js
    return null;
  }
}

// Initialize calendar manager
const calendarManager = new CalendarManager();
