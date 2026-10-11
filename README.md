# 🌍 GlobeStudy 3D - Interactive World Geography & Geopolitics Platform

An immersive, GPU-accelerated 3D interactive world globe designed for studying world geography, geopolitics, earth sciences, and global maritime logistics.

Built with **Globe.gl**, **Three.js**, authentic **NASA Blue Marble** satellite textures, and **Natural Earth GeoJSON** boundaries.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

---

## ✨ Features

### 🗺️ 1. Multi-Mode Globe Maps
- **🛰️ Satellite Physical Map**: Authentic NASA Blue Marble true-color satellite photography with 3D topographic relief elevation bump mapping.
- **🗺️ Political Map**: Clear continent color-coding with crisp national borderlines for studying territorial geography.
- **🌃 Night Lights Map**: NASA Earth-at-Night satellite imagery revealing real urban settlements and light clusters.

### 🏛️ 2. Geopolitical Alliances & Blocs
Single-click dynamic polygon highlighting across the globe for major international organizations:
- **NATO** (32 member states highlighted in Blue with collective defense profile)
- **BRICS+** (10 major emerging economies highlighted in Red)
- **European Union (EU)** (27 member states highlighted in Gold)
- **OPEC+** (Global petroleum export cartel highlighted in Emerald Green)
- **G7** (Advanced industrialized liberal economies highlighted in Purple)
- **ASEAN** (Southeast Asian Nations union highlighted in Orange)

### 🌋 3. Physical Geography & Earth Science
- **Tectonic Plates & Ring of Fire**: The Pacific volcanic subduction arc, the Mid-Atlantic Ridge, and the Alpine-Himalayan collision belt.
- **The Seven Summits & Iconic Peaks**: Mt. Everest (8,848 m), Aconcagua, Denali, Kilimanjaro, Elbrus, Vinson Massif, Puncak Jaya, K2, Mont Blanc, and Mt. Fuji with mountaineering histories.
- **Major River Basins**: Detailed courses of the Nile, Amazon, Yangtze, Mississippi-Missouri, Danube, Ganges, and Congo.
- **Major Landforms**: The Sahara, Arabian, Gobi, and Atacama deserts, plus the Tibetan Plateau ("Roof of the World"), Colorado Plateau, and Deccan Plateau.

### 🌊 4. Marine Features & Strategic Chokepoints
- **Oceans & Seas**: Pacific, Atlantic, Indian, Arctic, Southern Ocean, Mediterranean, Arabian Sea, Bay of Bengal, South China Sea, and Red Sea.
- **Strategic Straits with Glowing Radar Rings**: Strait of Malacca, Strait of Hormuz, Suez Canal, Bab-el-Mandeb, Panama Canal, Strait of Gibraltar, Bosporus, English Channel, Taiwan Strait, Bering Strait, Cape of Good Hope, and Strait of Magellan.
- **Extreme Oceanic Features**: The Mariana Trench (11,034 m Challenger Deep), Great Barrier Reef, Gulf of Mexico, Persian Gulf, and the Dead Sea (-430 m).

### 📡 5. Global Connectivity & 3D Megacities
- **3D Vertical Megacity Columns**: Tokyo (37.4M), Delhi (32.9M), Shanghai (29.2M), Dhaka, São Paulo, Mexico City, Cairo, Beijing, Mumbai, New York with 3D elevation bars scaled by population.
- **Subsea Internet Fiber Cables**: The submarine trans-oceanic cables carrying 99% of global internet traffic.
- **3D Maritime Shipping Lanes**: Real-world animated cargo corridors linking Asian manufacturing, Middle Eastern energy, and Western consumer markets.
- **Historic Voyages of Discovery**: Magellan's circumnavigation (1519), Columbus (1492), and Vasco da Gama (1497).

### 🎮 6. Study Tools
- **Unified Global Search**: Autocomplete search across all 177 countries, straits, summits, oceans, rivers, and cities.
- **Interactive Geography Quiz**: Practice quizzes covering Capitals, Strategic Straits, Seven Summits, Continents, and Flags with live scoring and fly-to animations.
- **Fly-to Camera Controls**: Smooth camera flight and zoom when clicking any country or feature.

---

## 🚀 Deployment to Cloudflare Pages

This is a static, zero-dependency web application that deploys to **Cloudflare Pages** in seconds:

### Method 1: Via Cloudflare Dashboard (Recommended)
1. Go to your **[Cloudflare Dashboard](https://dash.cloudflare.com/)** > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your GitHub repository: `ashokmandial/WorldMap`.
3. Configure your build settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` *(or leave blank for root)*
4. Click **Save and Deploy**. Cloudflare Pages will build and deploy your site globally across 300+ data centers with instant loading!

### Method 2: Via Wrangler CLI
```bash
npm install -g wrangler
wrangler pages deploy . --project-name worldmap
```

---

## 💻 Running Locally

No build tools or package managers required. Simply run any local static HTTP server:

```powershell
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 📜 License
MIT License. Open for educational and personal use.
