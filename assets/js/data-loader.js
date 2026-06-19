/**
 * Data Loader System
 * Loads month-specific content from data files
 */

const monthlyData = {
  0: { // January - Rabi Season (Soil Prep & Planning)
    cropStatus: "Prepare soil with organic matter. Test pH levels. Plan crop rotation for sustainable farming practices.",
    training: [
      { title: "Soil Health Assessment", duration: "2 hours", type: "practical" },
      { title: "Organic Matter Management", duration: "1.5 hours", type: "theory" }
    ],
    activities: [
      "Conduct soil testing",
      "Apply compost and organic amendments",
      "Prepare seed beds",
      "Set up rainwater harvesting structures"
    ],
    videos: [
      { title: "Soil Preparation Basics", duration: "12 min" },
      { title: "Composting Methods", duration: "15 min" }
    ]
  },
  1: { // February - Rabi Season (Sowing)
    cropStatus: "Sow winter crops. Monitor moisture levels. Implement water conservation techniques.",
    training: [
      { title: "Seed Selection & Treatment", duration: "2 hours", type: "practical" },
      { title: "Irrigation Efficiency", duration: "1.5 hours", type: "theory" }
    ],
    activities: [
      "Sow certified seeds",
      "Install drip irrigation systems",
      "Apply mulch for moisture retention",
      "Monitor for pests naturally"
    ],
    videos: [
      { title: "Seed Treatment Techniques", duration: "10 min" },
      { title: "Drip Irrigation Setup", duration: "18 min" }
    ]
  },
  2: { // March - Rabi Season (Growth)
    cropStatus: "Monitor plant growth. Apply bio-fertilizers. Check for nutrient deficiencies.",
    training: [
      { title: "Nutrient Management in Rabi", duration: "2 hours", type: "theory" },
      { title: "Pest & Disease Management", duration: "2 hours", type: "practical" }
    ],
    activities: [
      "Apply bio-fertilizers",
      "Monitor plant health",
      "Scout for pests using IPM methods",
      "Maintain weed-free fields"
    ],
    videos: [
      { title: "Bio-fertilizer Application", duration: "14 min" },
      { title: "Integrated Pest Management", duration: "20 min" }
    ]
  },
  3: { // April - Rabi Season (Late Growth)
    cropStatus: "Late growth stage. Monitor water stress. Prepare for harvesting logistics.",
    training: [
      { title: "Water Stress Management", duration: "1.5 hours", type: "practical" },
      { title: "Harvest Readiness", duration: "2 hours", type: "theory" }
    ],
    activities: [
      "Adjust irrigation schedules",
      "Scout for late-season pests",
      "Prepare harvesting equipment",
      "Document yield predictions"
    ],
    videos: [
      { title: "Water Stress Signs", duration: "11 min" },
      { title: "Pre-Harvest Checklist", duration: "16 min" }
    ]
  },
  4: { // May - Zaid Season (Summer Crops & Transition)
    cropStatus: "Transition to summer crops. Focus on water conservation. Start monsoon prep.",
    training: [
      { title: "Summer Crop Management", duration: "2 hours", type: "practical" },
      { title: "Water Harvesting Systems", duration: "2 hours", type: "theory" }
    ],
    activities: [
      "Harvest rabi crops",
      "Prepare fields for monsoon",
      "Construct water harvesting structures",
      "Plant summer vegetables"
    ],
    videos: [
      { title: "Summer Crop Selection", duration: "13 min" },
      { title: "Water Conservation Methods", duration: "19 min" }
    ]
  },
  5: { // June - Kharif Season (Monsoon Prep & Planting)
    cropStatus: "Monsoon arrives. Plant kharif crops. Manage waterlogging risks.",
    training: [
      { title: "Kharif Crop Planning", duration: "2 hours", type: "theory" },
      { title: "Soil & Water Conservation", duration: "2 hours", type: "practical" }
    ],
    activities: [
      "Sow kharif crops (rice, cotton, pulses)",
      "Build bunds and drainage systems",
      "Apply organic mulch",
      "Monitor waterlogging"
    ],
    videos: [
      { title: "Kharif Crops Overview", duration: "15 min" },
      { title: "Managing Excess Water", duration: "17 min" }
    ]
  },
  6: { // July - Kharif Season (Growth)
    cropStatus: "Active growth phase. Monitor rainfall patterns. Manage nutrient cycling.",
    training: [
      { title: "Nutrient Cycling in Kharif", duration: "2 hours", type: "practical" },
      { title: "Biodiversity Enhancement", duration: "1.5 hours", type: "theory" }
    ],
    activities: [
      "Maintain proper plant spacing",
      "Apply organic manures",
      "Create habitat for beneficial insects",
      "Monitor for water-borne diseases"
    ],
    videos: [
      { title: "Nutrient Deficiency Signs", duration: "12 min" },
      { title: "Creating Pollinator Habitats", duration: "18 min" }
    ]
  },
  7: { // August - Kharif Season (Peak Growth)
    cropStatus: "Peak vegetative growth. Focus on GHG reduction practices. Monitor crop health.",
    training: [
      { title: "Greenhouse Gas Reduction", duration: "2 hours", type: "theory" },
      { title: "Animal-Crop Integration", duration: "1.5 hours", type: "practical" }
    ],
    activities: [
      "Apply alternate wetting & drying (rice)",
      "Integrate livestock sustainably",
      "Maintain buffer zones",
      "Scout for mid-season pests"
    ],
    videos: [
      { title: "Reducing Methane Emissions", duration: "14 min" },
      { title: "Agroforestry Integration", duration: "20 min" }
    ]
  },
  8: { // September - Kharif Season (Late Growth)
    cropStatus: "Approaching maturity. Reduce nitrogen input. Prepare for harvest.",
    training: [
      { title: "Pre-Harvest Preparation", duration: "2 hours", type: "practical" },
      { title: "Gender-Inclusive Farming", duration: "1.5 hours", type: "theory" }
    ],
    activities: [
      "Monitor moisture for harvest readiness",
      "Plan harvesting logistics",
      "Engage women in decision-making",
      "Prepare storage facilities"
    ],
    videos: [
      { title: "Harvest Timing Guide", duration: "13 min" },
      { title: "Women in Agriculture", duration: "16 min" }
    ]
  },
  9: { // October - Post Monsoon (Harvesting & Prep)
    cropStatus: "Harvest kharif crops. Assess yield. Plan next season.",
    training: [
      { title: "Sustainable Harvesting", duration: "2 hours", type: "practical" },
      { title: "Post-Harvest Management", duration: "2 hours", type: "theory" }
    ],
    activities: [
      "Harvest matured crops",
      "Dry and store grains properly",
      "Prepare residues for composting",
      "Conduct soil health assessment"
    ],
    videos: [
      { title: "Crop Harvesting Techniques", duration: "15 min" },
      { title: "Grain Storage Methods", duration: "18 min" }
    ]
  },
  10: { // November - Rabi Season Prep (Planning)
    cropStatus: "Prepare for rabi season. Enhance soil with amendments. Plan crop selection.",
    training: [
      { title: "Rabi Season Planning", duration: "2 hours", type: "theory" },
      { title: "Crop Rotation Strategies", duration: "1.5 hours", type: "practical" }
    ],
    activities: [
      "Incorporate crop residues",
      "Apply green manuring",
      "Plan crop rotation",
      "Prepare nurseries for rabi crops"
    ],
    videos: [
      { title: "Crop Rotation Benefits", duration: "14 min" },
      { title: "Green Manuring Guide", duration: "17 min" }
    ]
  },
  11: { // December - Rabi Season (Sowing & Early Growth)
    cropStatus: "Sow rabi crops. Monitor germination. Establish biodiversity zones.",
    training: [
      { title: "Rabi Crop Sowing", duration: "2 hours", type: "practical" },
      { title: "Living Income Through Value Addition", duration: "1.5 hours", type: "theory" }
    ],
    activities: [
      "Sow rabi crops",
      "Establish field margins for biodiversity",
      "Plan value-added products",
      "Set up nurseries for vegetables"
    ],
    videos: [
      { title: "Rabi Sowing Guide", duration: "13 min" },
      { title: "Value Added Farming", duration: "19 min" }
    ]
  }
};

class DataLoader {
  constructor() {
    this.init();
  }
  
  init() {
    window.addEventListener('monthChanged', (e) => this.loadMonthData(e.detail.month));
    window.addEventListener('languageChanged', () => this.reloadCurrentMonth());
    this.loadMonthData(calendarManager.currentMonth);
  }
  
  loadMonthData(monthIndex) {
    const data = monthlyData[monthIndex];
    if (!data) return;
    
    this.renderCropStatus(data.cropStatus);
    this.renderTrainingSessions(data.training);
    this.renderActivities(data.activities);
    this.renderVideos(data.videos);
  }
  
  renderCropStatus(status) {
    const container = document.getElementById('cropStatusContent');
    if (container) {
      container.innerHTML = `<p class="text-gray-700 leading-relaxed">${status}</p>`;
    }
  }
  
  renderTrainingSessions(sessions) {
    const container = document.getElementById('trainingContent');
    if (!container) return;
    
    container.innerHTML = sessions.map(session => `
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 class="font-bold text-blue-700 mb-2">📚 ${session.title}</h4>
        <p class="text-sm text-gray-600">⏱️ Duration: ${session.duration}</p>
        <p class="text-xs text-blue-600 mt-1">Type: ${session.type === 'practical' ? '🔧 Practical' : '📖 Theory'}</p>
      </div>
    `).join('');
  }
  
  renderActivities(activities) {
    const container = document.getElementById('activitiesContent');
    if (!container) return;
    
    container.innerHTML = activities.map(activity => `
      <div class="flex items-start gap-3 p-3 bg-orange-50 rounded border-l-4 border-orange-500">
        <i class="fas fa-check-circle text-orange-600 mt-1"></i>
        <span class="text-gray-700">${activity}</span>
      </div>
    `).join('');
  }
  
  renderVideos(videos) {
    const container = document.getElementById('videosContent');
    if (!container) return;
    
    container.innerHTML = videos.map(video => `
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded hover:shadow-md transition">
        <h4 class="font-bold text-purple-700 mb-2">▶️ ${video.title}</h4>
        <p class="text-sm text-gray-600">Duration: ${video.duration}</p>
        <button class="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition text-sm font-semibold">
          Watch Video
        </button>
      </div>
    `).join('');
  }
  
  reloadCurrentMonth() {
    this.loadMonthData(calendarManager.currentMonth);
  }
}

// Initialize data loader
const dataLoader = new DataLoader();
