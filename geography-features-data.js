/**
 * Comprehensive Geography & Marine Features Dataset
 * Includes: Tectonic Plates, Ring of Fire, Summits, Major Rivers, Landforms,
 * Smaller Water Bodies, Trenches, Reefs, Subsea Cables, Mega-Cities, and Historic Voyages.
 */

// 1. TECTONIC PLATES & FAULT LINES (Paths)
const TECTONIC_PATHS = [
    {
        name: "Pacific 'Ring of Fire'",
        type: "Tectonic Subduction & Volcanic Arc",
        color: "#f87171", // Bright Red/Coral
        stroke: 2.2,
        dashLength: 0.3,
        dashGap: 0.1,
        dashAnimateTime: 3000,
        description: "Direct host to ~75% of Earth's volcanoes and ~90% of all global earthquakes along the rim of the Pacific Plate.",
        coords: [
            [-45, 168], [-38, 178], [-20, 178], [-15, 167], [-5, 150], [0, 140],
            [5, 126], [14, 120], [24, 121], [35, 139], [45, 143], [52, 158],
            [55, 165], [53, -168], [55, -160], [60, -148], [58, -137], [50, -127],
            [38, -123], [32, -117], [22, -106], [14, -92], [9, -84], [1, -80],
            [-12, -77], [-23, -70], [-35, -73], [-45, -75], [-55, -67]
        ]
    },
    {
        name: "Mid-Atlantic Ridge",
        type: "Divergent Tectonic Plate Boundary",
        color: "#fb923c", // Orange
        stroke: 1.8,
        description: "Underwater volcanic mountain chain spanning the length of the Atlantic where Eurasian/African and North/South American plates pull apart.",
        coords: [
            [75, 5], [65, -18], [55, -35], [45, -28], [30, -42], [15, -45],
            [0, -20], [-10, -14], [-25, -15], [-40, -18], [-53, -5]
        ]
    },
    {
        name: "Alpine-Himalayan Orogenic Belt",
        type: "Continental Collision Zone",
        color: "#facc15", // Amber/Gold
        stroke: 2.0,
        description: "Collision zone between the African/Arabian/Indian plates and the Eurasian plate, giving rise to the Alps, Zagros, and Himalayas.",
        coords: [
            [36, -5], [40, 5], [46, 10], [42, 22], [38, 35], [36, 48],
            [34, 60], [33, 72], [28, 85], [26, 95], [20, 98], [5, 96]
        ]
    }
];

// 2. THE SEVEN SUMMITS & ICONIC MOUNTAINS (Labels)
const SUMMITS_DATA = [
    {
        name: "Mt. Everest (Sagarmatha)",
        elev: "8,848.86 m (29,032 ft)",
        range: "Himalayas",
        continent: "Asia",
        lat: 27.9881,
        lon: 86.9250,
        firstAscent: "1953 (Edmund Hillary & Tenzing Norgay)",
        facts: ["Highest mountain above sea level on Earth", "Formed by the collision of the Indian and Eurasian tectonic plates", "Grows about 4 millimeters higher each year"]
    },
    {
        name: "Aconcagua",
        elev: "6,961 m (22,838 ft)",
        range: "Andes",
        continent: "South America",
        lat: -32.6532,
        lon: -70.0109,
        firstAscent: "1897 (Matthias Zurbriggen)",
        facts: ["Highest mountain in both the Western and Southern Hemispheres", "Located in the Mendoza Province of Argentina near Chile", "Second-highest of the Seven Summits after Everest"]
    },
    {
        name: "Denali (Mt. McKinley)",
        elev: "6,190 m (20,310 ft)",
        range: "Alaska Range",
        continent: "North America",
        lat: 63.0692,
        lon: -151.0070,
        firstAscent: "1913 (Hudson Stuck & Harry Karstens)",
        facts: ["Highest mountain peak in North America", "Has the highest vertical topographic relief from base to peak (5,500 m)", "Notorious for extreme sub-zero Arctic temperatures"]
    },
    {
        name: "Mt. Kilimanjaro",
        elev: "5,895 m (19,341 ft)",
        range: "Eastern Rift Mountains",
        continent: "Africa",
        lat: -3.0674,
        lon: 37.3556,
        firstAscent: "1889 (Hans Meyer & Ludwig Purtscheller)",
        facts: ["Highest peak in Africa and world's tallest free-standing mountain", "Dormant stratovolcano with three distinct volcanic cones: Kibo, Mawenzi, and Shira", "Features famous disappearing equatorial snowcaps and glaciers"]
    },
    {
        name: "Mt. Elbrus",
        elev: "5,642 m (18,510 ft)",
        range: "Caucasus Mountains",
        continent: "Europe",
        lat: 43.3499,
        lon: 42.4453,
        firstAscent: "1874 (Florence Crauford Grove)",
        facts: ["Highest peak in Europe and Russia", "Extinct double-peaked volcano covered by permanent glacial ice", "Located near the border between Georgia and Russia"]
    },
    {
        name: "Vinson Massif",
        elev: "4,892 m (16,050 ft)",
        range: "Sentinel Range",
        continent: "Antarctica",
        lat: -78.5255,
        lon: -85.6171,
        firstAscent: "1966 (Nicholas Clinch)",
        facts: ["Highest peak on the frozen continent of Antarctica", "Located approximately 1,200 km from the South Pole", "Experienced continuous 24-hour daylight during summer ascents"]
    },
    {
        name: "Puncak Jaya (Carstensz Pyramid)",
        elev: "4,884 m (16,024 ft)",
        range: "Sudirman Range",
        continent: "Oceania",
        lat: -4.0833,
        lon: 137.1833,
        firstAscent: "1962 (Heinrich Harrer)",
        facts: ["Highest island peak in the world and highest mountain in Oceania", "Located in the Papua province of Indonesia", "Features rare tropical glaciers near the equator"]
    },
    {
        name: "K2 (Godwin-Austen)",
        elev: "8,611 m (28,251 ft)",
        range: "Karakoram",
        continent: "Asia",
        lat: 35.8808,
        lon: 76.5133,
        firstAscent: "1954 (Achille Compagnoni & Lino Lacedelli)",
        facts: ["Second-highest peak on Earth and known as the 'Savage Mountain'", "Has the second-highest fatality rate among 8,000-meter peaks", "Extremely steep pyramidal shape makes it harder to climb than Everest"]
    },
    {
        name: "Mont Blanc",
        elev: "4,808 m (15,774 ft)",
        range: "Alps",
        continent: "Europe",
        lat: 45.8326,
        lon: 6.8652,
        firstAscent: "1786 (Jacques Balmat & Michel Paccard)",
        facts: ["Highest mountain in the Alps and Western Europe", "Straddles the border between France and Italy", "Birthplace of modern mountaineering and alpine climbing"]
    },
    {
        name: "Mt. Fuji",
        elev: "3,776 m (12,389 ft)",
        range: "Fuji Volcanic Zone",
        continent: "Asia",
        lat: 35.3606,
        lon: 138.7274,
        firstAscent: "663 AD (Monk En no Gyōja)",
        facts: ["Highest peak in Japan and an exceptionally symmetrical sacred volcano", "Last erupted in 1707 during the Edo period (Hoei eruption)", "Immortalized in Hokusai's famous 'Thirty-Six Views of Mount Fuji'"]
    }
];

// 3. WORLD'S MAJOR RIVERS (Paths)
const RIVERS_PATHS = [
    {
        name: "Nile River",
        length: "6,650 km (4,132 mi)",
        basin: "Mediterranean Sea",
        color: "#38bdf8",
        stroke: 2.2,
        description: "Longest river on Earth (or second to Amazon), flowing north through northeastern Africa across 11 nations.",
        coords: [
            [-0.5, 30.5], [1.0, 32.5], [4.8, 31.6], [9.5, 30.5], [15.6, 32.5],
            [19.2, 30.5], [24.0, 32.9], [27.2, 31.2], [30.0, 31.2], [31.5, 31.5]
        ]
    },
    {
        name: "Amazon River",
        length: "6,400 km (3,977 mi)",
        basin: "Atlantic Ocean",
        color: "#4ade80",
        stroke: 2.5,
        description: "Largest river by discharge volume in the world, holding greater flow than the next seven largest rivers combined.",
        coords: [
            [-10.8, -75.5], [-5.0, -73.5], [-3.8, -70.0], [-3.1, -60.0],
            [-2.4, -54.7], [-1.5, -51.5], [0.0, -49.5]
        ]
    },
    {
        name: "Yangtze River (Chang Jiang)",
        length: "6,300 km (3,915 mi)",
        basin: "East China Sea",
        color: "#60a5fa",
        stroke: 2.2,
        description: "Longest river in Asia, flowing entirely within China. Basin generates roughly 20% of the PRC's GDP.",
        coords: [
            [33.5, 91.2], [30.5, 99.0], [26.5, 102.5], [29.5, 106.5],
            [30.8, 111.3], [30.5, 114.3], [32.0, 118.8], [31.3, 121.5]
        ]
    },
    {
        name: "Mississippi-Missouri River",
        length: "6,275 km (3,902 mi)",
        basin: "Gulf of Mexico",
        color: "#38bdf8",
        stroke: 2.2,
        description: "Chief river of the largest drainage system in North America, flowing through the heart of the United States.",
        coords: [
            [47.2, -95.2], [44.9, -93.1], [41.5, -90.5], [38.8, -90.2],
            [35.1, -90.0], [32.3, -90.9], [29.9, -90.1], [29.1, -89.2]
        ]
    },
    {
        name: "Danube River",
        length: "2,850 km (1,770 mi)",
        basin: "Black Sea",
        color: "#818cf8",
        stroke: 2.0,
        description: "Central and Southeastern Europe's longest river, flowing through or touching 10 sovereign nations and 4 European capitals.",
        coords: [
            [48.0, 8.2], [48.8, 12.1], [48.2, 16.4], [48.1, 17.1],
            [47.5, 19.0], [45.2, 19.8], [44.8, 20.5], [44.3, 28.2], [45.2, 29.7]
        ]
    },
    {
        name: "Ganges River (Ganga)",
        length: "2,525 km (1,569 mi)",
        basin: "Bay of Bengal",
        color: "#34d399",
        stroke: 2.2,
        description: "Sacred river of India and lifeline to over 400 million people across the Indo-Gangetic Plain.",
        coords: [
            [30.9, 79.0], [29.9, 78.1], [27.1, 79.9], [26.5, 80.3],
            [25.3, 83.0], [25.6, 85.1], [24.8, 87.9], [22.8, 89.5], [21.8, 89.0]
        ]
    },
    {
        name: "Congo River",
        length: "4,700 km (2,920 mi)",
        basin: "Atlantic Ocean",
        color: "#2dd4bf",
        stroke: 2.2,
        description: "World's deepest river (measured at over 220 meters) and second-largest by discharge after the Amazon.",
        coords: [
            [-11.5, 27.5], [-5.0, 26.0], [0.5, 25.2], [2.1, 22.5],
            [0.0, 18.2], [-4.3, 15.3], [-5.8, 12.3]
        ]
    }
];

// 4. MAJOR LANDFORMS: DESERTS & PLATEAUS (Labels & Badges)
const LANDFORMS_DATA = [
    {
        name: "Sahara Desert",
        type: "Desert",
        area: "9,200,000 km²",
        lat: 23.4,
        lon: 12.6,
        size: 1.6,
        color: "#fbbf24",
        facts: [
            "Largest hot desert in the world, covering ~31% of the African continent",
            "Spans 11 countries from the Atlantic Ocean to the Red Sea",
            "Underneath the sand dunes lie massive ancient fossil water aquifers"
        ]
    },
    {
        name: "Tibetan Plateau ('Roof of the World')",
        type: "Plateau",
        area: "2,500,000 km² (Avg Elev: 4,500 m)",
        lat: 33.0,
        lon: 88.0,
        size: 1.6,
        color: "#e2e8f0",
        facts: [
            "Highest and largest plateau on Earth, acting as the 'Third Pole'",
            "Headwaters of Asia's great rivers: Yangtze, Yellow, Mekong, Indus, and Brahmaputra",
            "Formed by the collision of the Indian subcontinent into the Eurasian continent"
        ]
    },
    {
        name: "Arabian Desert",
        type: "Desert",
        area: "2,330,000 km²",
        lat: 22.0,
        lon: 48.0,
        size: 1.4,
        color: "#fbbf24",
        facts: [
            "Covers almost the entire Arabian Peninsula",
            "Contains the Rub' al Khali (Empty Quarter), the world's largest sand sea",
            "Houses vast petroleum and natural gas hydrocarbon basins beneath the surface"
        ]
    },
    {
        name: "Gobi Desert",
        type: "Cold Desert",
        area: "1,295,000 km²",
        lat: 44.0,
        lon: 105.0,
        size: 1.4,
        color: "#fbbf24",
        facts: [
            "Cold rain-shadow desert created by the Himalayas blocking Indian Ocean moisture",
            "Famous for rich dinosaur fossil beds discovered at the Flaming Cliffs",
            "Crossed by branches of the historical overland Silk Road"
        ]
    },
    {
        name: "Atacama Desert",
        type: "Non-Polar Arid Desert",
        area: "105,000 km²",
        lat: -23.8,
        lon: -69.2,
        size: 1.2,
        color: "#fbbf24",
        facts: [
            "Driest non-polar desert on Earth; some weather stations recorded zero rainfall for centuries",
            "Home to world-class astronomical observatories like ALMA due to cloudless skies",
            "NASA uses its hyper-arid soil as an analogue for testing Mars rovers"
        ]
    },
    {
        name: "Colorado Plateau",
        type: "Plateau",
        area: "337,000 km²",
        lat: 37.0,
        lon: -110.0,
        size: 1.3,
        color: "#fb923c",
        facts: [
            "High desert plateau deeply incised by the Colorado River and its tributaries",
            "Home to the Grand Canyon, Zion, Bryce Canyon, and Monument Valley",
            "Features dramatic red rock sandstone buttes, arches, and hoodoos"
        ]
    },
    {
        name: "Deccan Plateau",
        type: "Volcanic Basalt Plateau",
        area: "422,000 km²",
        lat: 17.0,
        lon: 77.0,
        size: 1.3,
        color: "#fb923c",
        facts: [
            "Massive triangular plateau bounded by the Western and Eastern Ghats in peninsular India",
            "Created by the Deccan Traps volcanic basalt flood eruptions ~66 million years ago",
            "Drained eastward by the Godavari, Krishna, and Kaveri river systems"
        ]
    }
];

// 5. SMALLER WATER BODIES, GULFS, BAYS & MARINE FEATURES (Labels & Pins)
const MARINE_FEATURES_DATA = [
    {
        name: "Mariana Trench (Challenger Deep)",
        type: "Oceanic Trench",
        depth: "11,034 m (36,201 ft)",
        lat: 11.3733,
        lon: 142.2483,
        badge: "🌊 Deepest Point on Earth",
        facts: [
            "Crescent-shaped trench in the western Pacific created by oceanic plate subduction",
            "Water pressure at the bottom exceeds 1,000 atmospheres (~8 tons per square inch)",
            "First reached by Jacques Piccard & Don Walsh in the bathyscaphe Trieste (1960)"
        ]
    },
    {
        name: "Great Barrier Reef",
        type: "Coral Reef Ecosystem",
        area: "344,400 km² (Length: 2,300 km)",
        lat: -18.2871,
        lon: 147.6992,
        badge: "🪸 World's Largest Living Structure",
        facts: [
            "Composed of over 2,900 individual reefs and 900 islands off Queensland, Australia",
            "So massive that it is visible as a distinct feature from Earth orbit",
            "Habitats for 1,500 species of fish, 400 types of coral, and endangered sea turtles"
        ]
    },
    {
        name: "Persian Gulf",
        type: "Marginal Sea / Gulf",
        lat: 27.0,
        lon: 51.0,
        badge: "🛢️ Hydrocarbon Epicenter",
        facts: [
            "Mediterranean-style sea connected to the Indian Ocean through the Strait of Hormuz",
            "Holds roughly half the world's proven crude oil and natural gas reserves",
            "Coastline shared by Iran, Saudi Arabia, UAE, Qatar, Kuwait, Iraq, and Bahrain"
        ]
    },
    {
        name: "Gulf of Mexico",
        type: "Oceanic Basin",
        lat: 25.0,
        lon: -90.0,
        badge: "🌊 North American Gulf",
        facts: [
            "Ninth-largest body of water in the world, bounded by the US, Mexico, and Cuba",
            "Origin of the Gulf Stream, the powerful warm ocean current moderating Europe's climate",
            "Major hub for offshore energy production and coastal fisheries"
        ]
    },
    {
        name: "Gulf of Aden",
        type: "Deepwater Gulf",
        lat: 12.5,
        lon: 48.0,
        badge: "⚓ Horn of Africa Waterway",
        facts: [
            "Located between Yemen on the Arabian Peninsula and Somalia in the Horn of Africa",
            "Connects the Red Sea via Bab-el-Mandeb to the vast Arabian Sea",
            "Vital sea lane for Middle Eastern crude oil and Asian manufactured goods"
        ]
    },
    {
        name: "Gulf of Guinea",
        type: "Oceanic Gulf",
        lat: 2.0,
        lon: 3.0,
        badge: "🌍 0° Lat / 0° Lon Intersection",
        facts: [
            "Northeasternmost part of the tropical Atlantic Ocean off West Africa",
            "Location of 'Null Island' — the intersection of the Equator and Prime Meridian (0°N, 0°E)",
            "Rich in deepwater offshore petroleum deposits"
        ]
    },
    {
        name: "Hudson Bay",
        type: "Inland Inland Sea",
        lat: 60.0,
        lon: -85.0,
        badge: "❄️ Subarctic Sea",
        facts: [
            "Second-largest bay in the world, deeply indenting northeastern Canada",
            "Named after Sir Henry Hudson who explored it in 1610 while searching for the Northwest Passage",
            "Remains frozen over for more than half of the year"
        ]
    },
    {
        name: "Mozambique Channel",
        type: "Ocean Strait / Channel",
        lat: -18.0,
        lon: 41.0,
        badge: "🚢 East African Sea Lane",
        facts: [
            "Arm of the Indian Ocean separating the island of Madagascar from mainland southeast Africa",
            "Carries warm south-flowing Agulhas Current waters",
            "Alternate maritime route for mega-tankers avoiding pirate zones or canal bottlenecks"
        ]
    },
    {
        name: "Caspian Sea",
        type: "Endorheic Basin",
        area: "371,000 km²",
        lat: 42.0,
        lon: 51.0,
        badge: "🌊 Largest Inland Lake/Sea",
        facts: [
            "World's largest inland body of water, classified as both a lake and a sea",
            "Water surface sits approximately 28 meters below global ocean sea level",
            "Has no natural marine outlets to the world's oceans"
        ]
    },
    {
        name: "Dead Sea",
        type: "Hypersaline Salt Lake",
        elevation: "-430.5 m below sea level",
        lat: 31.5,
        lon: 35.5,
        badge: "🧂 Lowest Land Elevation on Earth",
        facts: [
            "Lowest point of dry land surface anywhere on planet Earth",
            "Salinity of ~34%, almost 10 times saltier than the ocean, making natural swimming buoyant",
            "Contains unique therapeutic mineral salts and natural asphalt seeps"
        ]
    }
];

// 6. UNDERSEA INTERNET FIBER-OPTIC CABLES (3D Arcs)
const SUBSEA_CABLES_DATA = [
    {
        name: "Apollo / TAT Trans-Atlantic Express",
        type: "Undersea Fiber Optic (99% of Internet)",
        color: ["#a855f7", "#ec4899"], // Purple/Pink
        start: { name: "New York Hub (USA)", lat: 40.7, lon: -74.0 },
        end: { name: "Bude / London (UK)", lat: 50.8, lon: -4.5 },
        altitude: 0.05,
        description: "Carries petabits of intercontinental financial transactions, cloud data, and consumer traffic across the Atlantic seabed."
    },
    {
        name: "Trans-Pacific Express (TPE)",
        type: "Trans-Pacific Subsea Cable",
        color: ["#06b6d4", "#a855f7"],
        start: { name: "San Jose / Oregon (USA)", lat: 37.3, lon: -121.9 },
        end: { name: "Tokyo / Shanghai Hub", lat: 35.6, lon: 139.7 },
        altitude: 0.06,
        description: "High-capacity optical submarine communications cable linking the US West Coast with East Asia."
    },
    {
        name: "SEA-ME-WE-5 (Southeast Asia - Middle East - Western Europe)",
        type: "Eurasian Data Backbone",
        color: ["#3b82f6", "#10b981"],
        start: { name: "Singapore Data Hub", lat: 1.3, lon: 103.8 },
        end: { name: "Marseille / Toulon (France)", lat: 43.3, lon: 5.4 },
        altitude: 0.05,
        description: "20,000 km optical subsea cable crossing the Indian Ocean and Red Sea to connect 17 nations."
    },
    {
        name: "2Africa Mega-Subsea Cable",
        type: "Pan-African Fiber Ring",
        color: ["#f59e0b", "#10b981"],
        start: { name: "Bude (UK)", lat: 50.8, lon: -4.5 },
        end: { name: "Cape Town (South Africa)", lat: -33.9, lon: 18.4 },
        altitude: 0.06,
        description: "One of the longest subsea cable systems in the world (45,000 km), encircling the entire continent of Africa."
    },
    {
        name: "South Atlantic Cable System (SACS)",
        type: "Direct Trans-South Atlantic Cable",
        color: ["#ec4899", "#f59e0b"],
        start: { name: "Fortaleza (Brazil)", lat: -3.7, lon: -38.5 },
        end: { name: "Luanda (Angola)", lat: -8.8, lon: 13.2 },
        altitude: 0.05,
        description: "First direct subsea cable across the South Atlantic, radically lowering internet latency between the Americas and Africa."
    }
];

// 7. WORLD'S TOP MEGACITIES (3D Vertical Columns)
const MEGACITIES_DATA = [
    { name: "Tokyo", country: "Japan", pop: "37.4 Million", lat: 35.6762, lon: 139.6503, alt: 0.25, color: "#38bdf8", rank: "#1 Largest Metropolitan Area" },
    { name: "Delhi", country: "India", pop: "32.9 Million", lat: 28.6139, lon: 77.2090, alt: 0.23, color: "#38bdf8", rank: "#2 World Megacity" },
    { name: "Shanghai", country: "China", pop: "29.2 Million", lat: 31.2304, lon: 121.4737, alt: 0.21, color: "#38bdf8", rank: "#3 Global Financial & Port Hub" },
    { name: "Dhaka", country: "Bangladesh", pop: "23.2 Million", lat: 23.8103, lon: 90.4125, alt: 0.17, color: "#38bdf8", rank: "#4 High-Density Metropolis" },
    { name: "São Paulo", country: "Brazil", pop: "22.6 Million", lat: -23.5505, lon: -46.6333, alt: 0.16, color: "#38bdf8", rank: "#5 Largest City in the Americas" },
    { name: "Mexico City", country: "Mexico", pop: "22.3 Million", lat: 19.4326, lon: -99.1332, alt: 0.16, color: "#38bdf8", rank: "#6 Historic Aztec Basin Capital" },
    { name: "Cairo", country: "Egypt", pop: "22.2 Million", lat: 30.0444, lon: 31.2357, alt: 0.16, color: "#38bdf8", rank: "#7 Largest Metropolis in Africa" },
    { name: "Beijing", country: "China", pop: "21.9 Million", lat: 39.9042, lon: 116.4074, alt: 0.15, color: "#38bdf8", rank: "#8 Capital of China" },
    { name: "Mumbai", country: "India", pop: "21.3 Million", lat: 19.0760, lon: 72.8777, alt: 0.15, color: "#38bdf8", rank: "#9 Financial Hub of South Asia" },
    { name: "New York City", country: "United States", pop: "19.0 Million", lat: 40.7128, lon: -74.0060, alt: 0.14, color: "#38bdf8", rank: "#10 Global Commerce & Cultural Capital" },
    { name: "London", country: "United Kingdom", pop: "9.6 Million", lat: 51.5074, lon: -0.1278, alt: 0.10, color: "#38bdf8", rank: "Global Financial Center" },
    { name: "Singapore", country: "Singapore", pop: "5.9 Million", lat: 1.3521, lon: 103.8198, alt: 0.08, color: "#38bdf8", rank: "Global Maritime & Tech City-State" }
];

// 8. HISTORIC MARITIME EXPLORATION VOYAGES (3D Arcs)
const HISTORIC_VOYAGES_DATA = [
    {
        name: "Magellan-Elcano Circumnavigation (1519-1522)",
        type: "First Global Circumnavigation",
        color: ["#f59e0b", "#10b981"],
        start: { name: "Sanlúcar de Barrameda (Spain)", lat: 36.8, lon: -6.4 },
        end: { name: "Strait of Magellan (Chile)", lat: -53.5, lon: -70.9 },
        altitude: 0.12,
        description: "Ferdinand Magellan's expedition discovered the passage around South America into the Pacific Ocean, proving Earth's true circumference."
    },
    {
        name: "Columbus Transatlantic Voyage (1492)",
        type: "First European Atlantic Crossing",
        color: ["#ec4899", "#3b82f6"],
        start: { name: "Palos de la Frontera (Spain)", lat: 37.2, lon: -6.9 },
        end: { name: "Guanahani / Bahamas", lat: 24.1, lon: -74.5 },
        altitude: 0.10,
        description: "Christopher Columbus's expedition with the Niña, Pinta, and Santa María initiated permanent European contact with the Americas."
    },
    {
        name: "Vasco da Gama Route to India (1497-1498)",
        type: "Discovery of Cape Route to Asia",
        color: ["#8b5cf6", "#f59e0b"],
        start: { name: "Lisbon (Portugal)", lat: 38.7, lon: -9.1 },
        end: { name: "Calicut / Kozhikode (India)", lat: 11.2, lon: 75.8 },
        altitude: 0.15,
        description: "First direct ocean sea voyage from Europe to India sailing around Africa's Cape of Good Hope, bypassing overland Ottoman taxes."
    }
];
