/**
 * Accordion Navigation System
 * Handles month selection and quick links
 */

class AccordionManager {
  constructor() {
    this.monthAccordion = document.getElementById('monthAccordion');
    this.init();
  }
  
  init() {
    this.buildMonthAccordion();
    window.addEventListener('languageChanged', () => this.buildMonthAccordion());
  }
  
  buildMonthAccordion() {
    if (!this.monthAccordion) return;
    
    this.monthAccordion.innerHTML = '';
    const trans = translations[languageManager.currentLanguage];
    
    trans.months.forEach((monthName, index) => {
      const monthItem = document.createElement('button');
      monthItem.className = `w-full text-left px-4 py-3 hover:bg-green-50 transition text-sm font-medium flex items-center justify-between ${
        index === calendarManager.currentMonth ? 'bg-green-100 text-green-700 border-l-4 border-green-700' : 'text-gray-700'
      }`;
      monthItem.innerHTML = `
        <span>${monthName}</span>
        <i class="fas fa-chevron-right text-xs"></i>
      `;
      
      monthItem.addEventListener('click', () => {
        calendarManager.setMonth(index);
        this.updateAccordionHighlight(index);
      });
      
      this.monthAccordion.appendChild(monthItem);
    });
  }
  
  updateAccordionHighlight(monthIndex) {
    document.querySelectorAll('#monthAccordion button').forEach((btn, idx) => {
      btn.classList.remove('bg-green-100', 'text-green-700', 'border-l-4', 'border-green-700');
      btn.classList.add('text-gray-700');
      
      if (idx === monthIndex) {
        btn.classList.add('bg-green-100', 'text-green-700', 'border-l-4', 'border-green-700');
        btn.classList.remove('text-gray-700');
      }
    });
  }
}

// Initialize accordion
const accordionManager = new AccordionManager();

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  
  sidebar.classList.toggle('hidden');
  sidebar.classList.toggle('absolute');
  sidebar.classList.toggle('z-50');
  sidebar.classList.toggle('w-full');
  sidebar.classList.toggle('left-0');
  sidebar.classList.toggle('top-20');
  sidebar.classList.toggle('bg-white');
  
  overlay.classList.toggle('hidden');
});

// Close mobile menu when overlay clicked
const overlay = document.getElementById('sidebarOverlay');
if (overlay) {
  overlay.addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
