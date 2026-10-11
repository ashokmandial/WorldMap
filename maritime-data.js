/**
 * Maritime Geography Dataset: Oceans, Seas, Strategic Straits, and Global Trade Routes
 */

// 1. OCEANS & MAJOR SEAS
const OCEANS_DATA = [
    {
        name: "Pacific Ocean",
        type: "Ocean",
        lat: 15.0,
        lon: -160.0,
        size: 1.8,
        color: "#67e8f9",
        description: "The largest and deepest of Earth's oceanic divisions, covering more than 30% of the Earth's surface (~165 million km²). Contains the Mariana Trench, the deepest point on Earth (11,034 m)."
    },
    {
        name: "South Pacific",
        type: "Ocean",
        lat: -28.0,
        lon: -125.0,
        size: 1.5,
        color: "#67e8f9",
        description: "Southern basin of the Pacific Ocean, home to Polynesia, the Great Barrier Reef, and Point Nemo — the oceanic pole of inaccessibility furthest from any land."
    },
    {
        name: "Atlantic Ocean",
        type: "Ocean",
        lat: 28.0,
        lon: -38.0,
        size: 1.8,
        color: "#67e8f9",
        description: "The second-largest ocean, covering ~20% of Earth's surface (~106 million km²). Bridges Europe, Africa, and the Americas, and carries the historic Trans-Atlantic shipping lanes."
    },
    {
        name: "South Atlantic",
        type: "Ocean",
        lat: -24.0,
        lon: -15.0,
        size: 1.5,
        color: "#67e8f9",
        description: "Southern basin of the Atlantic Ocean between South America and Southern Africa, characterized by the South Atlantic Subtropical Gyre."
    },
    {
        name: "Indian Ocean",
        type: "Ocean",
        lat: -12.0,
        lon: 78.0,
        size: 1.8,
        color: "#67e8f9",
        description: "Third-largest ocean (~70 million km²), bounded by Asia, Africa, and Australia. Vital for global commerce, carrying 80% of world seaborne oil trade through chokepoints."
    },
    {
        name: "Arctic Ocean",
        type: "Ocean",
        lat: 82.0,
        lon: 0.0,
        size: 1.4,
        color: "#93c5fd",
        description: "The smallest and shallowest ocean, centered on the North Pole. Largely covered by sea ice, now opening up emerging Northern Sea Route shipping corridors."
    },
    {
        name: "Southern Ocean",
        type: "Ocean",
        lat: -62.0,
        lon: 20.0,
        size: 1.4,
        color: "#93c5fd",
        description: "Also known as the Antarctic Ocean, encircles Antarctica. Driven by the Antarctic Circumpolar Current, the strongest ocean current on the planet."
    },
    {
        name: "Mediterranean Sea",
        type: "Sea",
        lat: 35.5,
        lon: 18.0,
        size: 1.1,
        color: "#38bdf8",
        description: "Historic sea connected to the Atlantic via the Strait of Gibraltar and to the Red Sea via the Suez Canal. Cradle of ancient Egyptian, Greek, and Roman civilizations."
    },
    {
        name: "Arabian Sea",
        type: "Sea",
        lat: 16.0,
        lon: 64.0,
        size: 1.1,
        color: "#38bdf8",
        description: "Part of the northern Indian Ocean between India and the Arabian Peninsula. Vital for oil tankers exiting the Persian Gulf."
    },
    {
        name: "Bay of Bengal",
        type: "Sea",
        lat: 14.5,
        lon: 88.0,
        size: 1.1,
        color: "#38bdf8",
        description: "Largest water bay in the world, bounded by India, Bangladesh, and Myanmar. Fed by the sacred Ganges and Brahmaputra river systems."
    },
    {
        name: "South China Sea",
        type: "Sea",
        lat: 13.0,
        lon: 114.5,
        size: 1.2,
        color: "#38bdf8",
        description: "Strategic maritime crossroads through which one-third of global maritime shipping passes (~$3.4 trillion in trade per year)."
    },
    {
        name: "Caribbean Sea",
        type: "Sea",
        lat: 15.0,
        lon: -75.0,
        size: 1.1,
        color: "#38bdf8",
        description: "Sub-oceanic sea of the Atlantic, home to Mesoamerican coral reefs and leading into the Panama Canal."
    },
    {
        name: "Red Sea",
        type: "Sea",
        lat: 21.0,
        lon: 38.0,
        size: 1.0,
        color: "#38bdf8",
        description: "Inlet of the Indian Ocean between Africa and Asia. Key shortcut connecting the Mediterranean and Indian Oceans via Suez and Bab-el-Mandeb."
    }
];

// 2. STRATEGIC STRAITS & CANALS (GLOBAL CHOKEPOINTS)
const STRAITS_DATA = [
    {
        name: "Strait of Malacca",
        flag: "⚓",
        lat: 2.5,
        lon: 101.5,
        waterway: "Indian Ocean ↔ Pacific Ocean",
        countries: "Malaysia, Indonesia, Singapore",
        traffic: "~84,000 ships/year (~25% of world commerce)",
        importance: "Critical Asian Energy & Goods Chokepoint",
        facts: [
            "Connects the Indian Ocean to the South China Sea / Pacific Ocean",
            "Narrowest point (Phillips Channel in Singapore Strait) is just 2.8 km wide",
            "Carries over 16 million barrels of crude oil per day to East Asian economies"
        ]
    },
    {
        name: "Strait of Hormuz",
        flag: "⚓",
        lat: 26.56,
        lon: 56.25,
        waterway: "Persian Gulf ↔ Gulf of Oman / Indian Ocean",
        countries: "Oman, Iran, UAE",
        traffic: "~21 million barrels of petroleum/day (~21% of global liquids)",
        importance: "World's Most Critical Oil Transit Chokepoint",
        facts: [
            "The world's most vital petroleum transit corridor connecting Middle East exporters to world markets",
            "Only 39 km wide at its narrowest point with two 3-km-wide navigation lanes",
            "No viable maritime alternative exists for most oil exported from Saudi Arabia, Iraq, UAE, and Kuwait"
        ]
    },
    {
        name: "Suez Canal",
        flag: "⚓",
        lat: 30.70,
        lon: 32.34,
        waterway: "Mediterranean Sea ↔ Red Sea",
        countries: "Egypt",
        traffic: "~20,000 vessels/year (~12% of total global trade)",
        importance: "Shortest Maritime Link between Europe & Asia",
        facts: [
            "Opened in 1869, eliminating the need to sail 8,900 km around the entire African continent",
            "Stretches 193 km without locks, maintaining sea-level water across the Isthmus of Suez",
            "Crucial corridor for manufactured goods, containers, and refined petroleum products"
        ]
    },
    {
        name: "Bab-el-Mandeb Strait",
        flag: "⚓",
        lat: 12.58,
        lon: 43.33,
        waterway: "Red Sea ↔ Gulf of Aden / Indian Ocean",
        countries: "Yemen, Djibouti, Eritrea",
        traffic: "~6.2 million barrels of crude oil & petroleum products per day",
        importance: "Gate of Suez / Horn of Africa Chokepoint",
        facts: [
            "Name translates from Arabic as 'Gate of Tears' due to dangerous historic navigation",
            "Only 29 km wide, with Perim Island splitting it into two narrow navigable channels",
            "Together with Suez, forms the vital highway connecting Asian manufacturing with European ports"
        ]
    },
    {
        name: "Panama Canal",
        flag: "⚓",
        lat: 9.10,
        lon: -79.69,
        waterway: "Atlantic Ocean ↔ Pacific Ocean",
        countries: "Panama",
        traffic: "~14,000 ships/year (~5% of global maritime commerce)",
        importance: "Inter-Oceanic Shortcut between East & West",
        facts: [
            "Opened in 1914 across the Isthmus of Panama, cutting transit around Cape Horn by ~13,000 km",
            "Uses a system of locks powered by freshwater from Lake Gatun to lift ships 26 meters above sea level",
            "Expanded in 2016 to allow massive 'Neopanamax' container ships to transit"
        ]
    },
    {
        name: "Strait of Gibraltar",
        flag: "⚓",
        lat: 35.96,
        lon: -5.60,
        waterway: "Atlantic Ocean ↔ Mediterranean Sea",
        countries: "Spain, UK (Gibraltar), Morocco",
        traffic: "~100,000 vessels annually",
        importance: "Gateway to the Mediterranean & Southern Europe",
        facts: [
            "Separates Europe (Iberian Peninsula) from Africa (Morocco) by just 14.3 km at its narrowest",
            "Known in the ancient world as the 'Pillars of Hercules'",
            "Strategic access choke for all trade into Spain, France, Italy, Greece, and the Black Sea"
        ]
    },
    {
        name: "Bosporus & Dardanelles",
        flag: "⚓",
        lat: 41.12,
        lon: 29.07,
        waterway: "Black Sea ↔ Sea of Marmara ↔ Mediterranean",
        countries: "Turkey",
        traffic: "~48,000 ships/year",
        importance: "Only Maritime Outlet for the Black Sea Basin",
        facts: [
            "Bisects the historic city of Istanbul, separating Europe from Asia",
            "Critical export corridor for Ukrainian/Russian grain and Caspian Basin crude oil",
            "Regulated under the international 1936 Montreux Convention regarding military and civilian passage"
        ]
    },
    {
        name: "English Channel / Dover Strait",
        flag: "⚓",
        lat: 51.02,
        lon: 1.42,
        waterway: "North Sea ↔ Atlantic Ocean",
        countries: "United Kingdom, France",
        traffic: "~500 commercial ships/day (World's busiest shipping lane)",
        importance: "Northwest Europe Shipping Highway",
        facts: [
            "Strait of Dover is the narrowest part at 33.3 km wide, connecting the North Sea to the Atlantic",
            "Carries cargo to Europe's mega-ports: Rotterdam, Antwerp, Hamburg, and Le Havre",
            "Underneath the seabed runs the Channel Tunnel (50.5 km rail tunnel connecting UK and France)"
        ]
    },
    {
        name: "Cape of Good Hope",
        flag: "⚓",
        lat: -34.35,
        lon: 18.49,
        waterway: "Atlantic Ocean ↔ Indian Ocean",
        countries: "South Africa",
        traffic: "Alternative route for mega-tankers & when Suez is disrupted",
        importance: "Historic Southern African Maritime Route",
        facts: [
            "Discovered by Portuguese navigator Bartolomeu Dias in 1488, unlocking the sea route to India",
            "Primary detour route when Suez is blocked, adding 10-14 sailing days",
            "Known for treacherous rogue waves and severe southern ocean gale storms"
        ]
    },
    {
        name: "Strait of Magellan",
        flag: "⚓",
        lat: -53.47,
        lon: -70.92,
        waterway: "Atlantic Ocean ↔ Pacific Ocean",
        countries: "Chile",
        traffic: "Important deep-water passage for vessels too large for Panama",
        importance: "Southern tip of the Americas",
        facts: [
            "Navigated by Ferdinand Magellan in 1520 during the first historic circumnavigation of the globe",
            "Provides sheltered waters compared to the notoriously violent open seas of Drake Passage / Cape Horn",
            "Surrounded by dramatic Patagonian fjords, glaciers, and mountains"
        ]
    },
    {
        name: "Taiwan Strait",
        flag: "⚓",
        lat: 24.50,
        lon: 119.80,
        waterway: "South China Sea ↔ East China Sea",
        countries: "Taiwan, China",
        traffic: "~88% of world's largest container ships transit here",
        importance: "High-Tech Manufacturing & Asian Supply Chain Chokepoint",
        facts: [
            "160 km wide strait separating the island of Taiwan from continental East Asia",
            "Essential sea lane connecting factories in Japan, South Korea, Taiwan, and China with global consumers",
            "Carries crucial global supplies of advanced semiconductor microchips"
        ]
    },
    {
        name: "Bering Strait",
        flag: "⚓",
        lat: 65.80,
        lon: -168.90,
        waterway: "Pacific Ocean ↔ Arctic Ocean",
        countries: "Russia, United States (Alaska)",
        traffic: "Emerging Northern Sea Route corridor",
        importance: "Separates Asia from North America by 82 km",
        facts: [
            "The Diomede Islands in the middle sit only 3.8 km apart with the International Date Line between them",
            "Gateway to the emerging Arctic Northern Sea Route between Europe and East Asia",
            "Historic prehistoric land bridge ('Beringia') where early humans crossed into the Americas"
        ]
    }
];

// 3. GLOBAL MARITIME TRADE ROUTES (3D ARCS)
const TRADE_ROUTES_DATA = [
    // Europe - Asia via Suez & Malacca
    {
        name: "Asia - Europe via Suez Canal",
        type: "Manufacturing & Electronics",
        color: ["#38bdf8", "#818cf8"],
        start: { name: "Shanghai Port", lat: 31.2, lon: 121.5 },
        end: { name: "Strait of Malacca", lat: 2.5, lon: 101.5 },
        altitude: 0.08,
        description: "The primary shipping artery connecting East Asian export factories to European consumers."
    },
    {
        name: "Indian Ocean Transit",
        type: "Energy & Manufactured Goods",
        color: ["#818cf8", "#fbbf24"],
        start: { name: "Strait of Malacca", lat: 2.5, lon: 101.5 },
        end: { name: "Colombo (Sri Lanka)", lat: 6.9, lon: 79.8 },
        altitude: 0.07,
        description: "Transshipment hub linking Southeast Asia with the Indian subcontinent."
    },
    {
        name: "Arabian Sea - Red Sea Corridor",
        type: "Oil & Container Goods",
        color: ["#fbbf24", "#f43f5e"],
        start: { name: "Colombo (Sri Lanka)", lat: 6.9, lon: 79.8 },
        end: { name: "Bab-el-Mandeb", lat: 12.6, lon: 43.3 },
        altitude: 0.09,
        description: "Vital gateway corridor entering the Red Sea towards Egypt and Europe."
    },
    {
        name: "Red Sea to Suez Canal",
        type: "Global Maritime Arterial",
        color: ["#f43f5e", "#4ade80"],
        start: { name: "Bab-el-Mandeb", lat: 12.6, lon: 43.3 },
        end: { name: "Suez Canal", lat: 30.7, lon: 32.3 },
        altitude: 0.08,
        description: "Direct transit through Egypt's Suez Canal into the Mediterranean Sea."
    },
    {
        name: "Mediterranean - Gibraltar Trunk",
        type: "European Inter-Ocean Transit",
        color: ["#4ade80", "#38bdf8"],
        start: { name: "Suez Canal", lat: 30.7, lon: 32.3 },
        end: { name: "Strait of Gibraltar", lat: 35.9, lon: -5.6 },
        altitude: 0.08,
        description: "Westbound Mediterranean shipping lane exiting through the Strait of Gibraltar."
    },
    {
        name: "Gibraltar - Rotterdam Highway",
        type: "Atlantic Container Corridor",
        color: ["#38bdf8", "#a855f7"],
        start: { name: "Strait of Gibraltar", lat: 35.9, lon: -5.6 },
        end: { name: "Port of Rotterdam", lat: 51.9, lon: 4.5 },
        altitude: 0.08,
        description: "Final leg into Northern Europe's mega-ports: Rotterdam, Antwerp, and Hamburg."
    },

    // Middle East Oil Super-Artery
    {
        name: "Persian Gulf Oil Export Route",
        type: "Crude Oil & LNG",
        color: ["#f59e0b", "#ef4444"],
        start: { name: "Strait of Hormuz", lat: 26.6, lon: 56.2 },
        end: { name: "Strait of Malacca", lat: 2.5, lon: 101.5 },
        altitude: 0.12,
        description: "Over 15 million barrels/day of Middle Eastern crude shipped to China, Japan, and South Korea."
    },
    {
        name: "Persian Gulf to Red Sea",
        type: "Petroleum & Gas",
        color: ["#f59e0b", "#ec4899"],
        start: { name: "Strait of Hormuz", lat: 26.6, lon: 56.2 },
        end: { name: "Bab-el-Mandeb", lat: 12.6, lon: 43.3 },
        altitude: 0.09,
        description: "Hydrocarbon exports headed westward to Europe and the Mediterranean."
    },

    // Trans-Pacific Shipping
    {
        name: "Trans-Pacific North (East Asia ↔ USA)",
        type: "Consumer Goods & Tech",
        color: ["#06b6d4", "#3b82f6"],
        start: { name: "Tokyo / East Asia", lat: 35.6, lon: 139.7 },
        end: { name: "Port of Los Angeles", lat: 33.7, lon: -118.2 },
        altitude: 0.15,
        description: "Busiest American trade corridor, connecting Asian tech and manufacturing to North American markets."
    },
    {
        name: "Trans-Pacific South (Oceania ↔ Americas)",
        type: "Raw Materials & Food",
        color: ["#10b981", "#06b6d4"],
        start: { name: "Sydney Port", lat: -33.8, lon: 151.2 },
        end: { name: "Panama Canal", lat: 9.1, lon: -79.7 },
        altitude: 0.14,
        description: "Connects Australian and New Zealand trade to the Atlantic via Panama."
    },

    // Trans-Atlantic Highway
    {
        name: "North Atlantic Sea Lane (USA ↔ Europe)",
        type: "High-Value Goods & Chemicals",
        color: ["#6366f1", "#a855f7"],
        start: { name: "Port of New York / NJ", lat: 40.7, lon: -74.0 },
        end: { name: "English Channel / Rotterdam", lat: 51.0, lon: 1.4 },
        altitude: 0.13,
        description: "The historic trans-Atlantic trade corridor between the United States and the European Union."
    },

    // Panama Canal Trunk Routes
    {
        name: "Panama to US East Coast",
        type: "Containerized Trade",
        color: ["#ec4899", "#8b5cf6"],
        start: { name: "Panama Canal", lat: 9.1, lon: -79.7 },
        end: { name: "Port of New York", lat: 40.7, lon: -74.0 },
        altitude: 0.10,
        description: "Pacific cargo crossing the Isthmus of Panama heading to US East Coast population centers."
    },
    {
        name: "US West Coast to Panama Canal",
        type: "Grain & Industrial Products",
        color: ["#3b82f6", "#ec4899"],
        start: { name: "Port of Los Angeles", lat: 33.7, lon: -118.2 },
        end: { name: "Panama Canal", lat: 9.1, lon: -79.7 },
        altitude: 0.10,
        description: "Key coastal corridor linking California with Atlantic destinations."
    },

    // Cape of Good Hope Mega-Route
    {
        name: "Cape Route (Asia ↔ Atlantic)",
        type: "Bulk Minerals & Oil Supertankers",
        color: ["#f97316", "#eab308"],
        start: { name: "Strait of Malacca", lat: 2.5, lon: 101.5 },
        end: { name: "Cape of Good Hope", lat: -34.3, lon: 18.5 },
        altitude: 0.16,
        description: "The classic southern oceanic route taken by giant ore carriers and when canal routes face disruption."
    },
    {
        name: "Cape of Good Hope to Europe",
        type: "Raw Materials & Bulk Cargo",
        color: ["#eab308", "#10b981"],
        start: { name: "Cape of Good Hope", lat: -34.3, lon: 18.5 },
        end: { name: "Strait of Gibraltar", lat: 35.9, lon: -5.6 },
        altitude: 0.14,
        description: "Northbound South Atlantic corridor rounding Africa up to European ports."
    }
];
