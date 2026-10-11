/**
 * Countries Dataset for 3D Globe Study Tool
 */
const COUNTRIES_DATA = [
    // Asia
    {
        name: "India", code: "IN", flag: "🇮🇳", lat: 20.5937, lon: 78.9629,
        capital: "New Delhi", continent: "Asia", population: "1,428,627,663", area: "3,287,263 km²",
        languages: "Hindi, English", currency: "INR (₹)",
        facts: ["World's most populous nation and largest democracy", "Home to the Taj Mahal and the mighty Himalayas", "Invented the concept of zero and the decimal number system"]
    },
    {
        name: "China", code: "CN", flag: "🇨🇳", lat: 35.8617, lon: 104.1954,
        capital: "Beijing", continent: "Asia", population: "1,411,750,000", area: "9,596,961 km²",
        languages: "Mandarin", currency: "CNY (¥)",
        facts: ["The Great Wall stretches over 21,000 kilometers", "Invented paper, printing, gunpowder, and the compass", "Shares land borders with 14 different countries"]
    },
    {
        name: "Japan", code: "JP", flag: "🇯🇵", lat: 36.2048, lon: 138.2529,
        capital: "Tokyo", continent: "Asia", population: "124,500,000", area: "377,975 km²",
        languages: "Japanese", currency: "JPY (¥)",
        facts: ["Consists of 6,852 islands across the Pacific Rim", "Tokyo is the world's most populous metropolitan area (~37M people)", "Mount Fuji is an active volcano and sacred cultural landmark"]
    },
    {
        name: "South Korea", code: "KR", flag: "🇰🇷", lat: 35.9078, lon: 127.7669,
        capital: "Seoul", continent: "Asia", population: "51,740,000", area: "100,210 km²",
        languages: "Korean", currency: "KRW (₩)",
        facts: ["Global leader in high-speed fiber internet and mobile technology", "Seoul metro area houses nearly half the national population", "Home to world-renowned K-pop and UNESCO palace complexes"]
    },
    {
        name: "Indonesia", code: "ID", flag: "🇮🇩", lat: -0.7893, lon: 113.9213,
        capital: "Jakarta", continent: "Asia", population: "277,530,000", area: "1,904,569 km²",
        languages: "Indonesian", currency: "IDR (Rp)",
        facts: ["World's largest island country with over 17,000 islands", "Home to the Komodo dragon, the world's largest living lizard", "Houses Borobudur, the largest Buddhist temple monument on Earth"]
    },
    {
        name: "Saudi Arabia", code: "SA", flag: "🇸🇦", lat: 23.8859, lon: 45.0792,
        capital: "Riyadh", continent: "Asia", population: "36,400,000", area: "2,149,690 km²",
        languages: "Arabic", currency: "SAR (﷼)",
        facts: ["Largest country in the world without a single permanent natural river", "Contains the Rub' al Khali, the largest continuous sand desert", "Home to Islam's two holiest sanctuaries: Mecca and Medina"]
    },
    {
        name: "United Arab Emirates", code: "AE", flag: "🇦🇪", lat: 23.4241, lon: 53.8478,
        capital: "Abu Dhabi", continent: "Asia", population: "9,440,000", area: "83,600 km²",
        languages: "Arabic", currency: "AED (د.إ)",
        facts: ["Home to the Burj Khalifa in Dubai (828 meters tall)", "Formed in 1971 as a federation of seven sovereign emirates", "More than 85% of the total population consists of expatriates"]
    },
    {
        name: "Singapore", code: "SG", flag: "🇸🇬", lat: 1.3521, lon: 103.8198,
        capital: "Singapore", continent: "Asia", population: "5,920,000", area: "728 km²",
        languages: "English, Malay, Mandarin, Tamil", currency: "SGD (S$)",
        facts: ["One of only three surviving sovereign city-states in the world", "Pioneered the world's first night wildlife safari zoo", "One of the world's busiest container transshipment ports"]
    },
    {
        name: "Turkey", code: "TR", flag: "🇹🇷", lat: 38.9637, lon: 35.2433,
        capital: "Ankara", continent: "Asia", population: "85,300,000", area: "783,356 km²",
        languages: "Turkish", currency: "TRY (₺)",
        facts: ["Straddles two continents: Europe (Thrace) and Asia (Anatolia)", "Istanbul was formerly known as Byzantium and Constantinople", "Tulips were first cultivated and popularized here before reaching Holland"]
    },
    {
        name: "Thailand", code: "TH", flag: "🇹🇭", lat: 15.8700, lon: 100.9925,
        capital: "Bangkok", continent: "Asia", population: "71,800,000", area: "513,120 km²",
        languages: "Thai", currency: "THB (฿)",
        facts: ["Only Southeast Asian nation never colonized by European powers", "Known historically as Siam and nicknamed the 'Land of Smiles'", "Bangkok's ceremonial Thai name spans 168 letters"]
    },

    // Europe
    {
        name: "United Kingdom", code: "GB", flag: "🇬🇧", lat: 55.3781, lon: -3.4360,
        capital: "London", continent: "Europe", population: "67,330,000", area: "242,495 km²",
        languages: "English", currency: "GBP (£)",
        facts: ["London Underground (opened 1863) is the world's first subway system", "Greenwich Royal Observatory marks the Prime Meridian (0° Longitude)", "Composed of four nations: England, Scotland, Wales, and Northern Ireland"]
    },
    {
        name: "France", code: "FR", flag: "🇫🇷", lat: 46.2276, lon: 2.2137,
        capital: "Paris", continent: "Europe", population: "67,750,000", area: "643,801 km²",
        languages: "French", currency: "EUR (€)",
        facts: ["Most visited country on Earth with ~90 million international tourists annually", "Spans 12 time zones when accounting for overseas territories", "The Louvre Museum in Paris is the world's most visited art museum"]
    },
    {
        name: "Germany", code: "DE", flag: "🇩🇪", lat: 51.1657, lon: 10.4515,
        capital: "Berlin", continent: "Europe", population: "84,400,000", area: "357,022 km²",
        languages: "German", currency: "EUR (€)",
        facts: ["Largest economy and industrial powerhouse in the European Union", "Invented the modern automobile, diesel engine, and movable type printing", "Home to the world-famous Autobahn highway system"]
    },
    {
        name: "Italy", code: "IT", flag: "🇮🇹", lat: 41.8719, lon: 12.5674,
        capital: "Rome", continent: "Europe", population: "59,000,000", area: "301,340 km²",
        languages: "Italian", currency: "EUR (€)",
        facts: ["Has 58 UNESCO World Heritage Sites, the most of any country", "Encloses two independent nations: Vatican City and San Marino", "University of Bologna (founded 1088) is the oldest university in continuous operation"]
    },
    {
        name: "Spain", code: "ES", flag: "🇪🇸", lat: 40.4637, lon: -3.7492,
        capital: "Madrid", continent: "Europe", population: "47,600,000", area: "505,990 km²",
        languages: "Spanish", currency: "EUR (€)",
        facts: ["Spanish is the second most natively spoken language on Earth", "Sagrada Família in Barcelona has been under construction since 1882", "Produces approximately 40% of the entire world's olive oil supply"]
    },
    {
        name: "Russia", code: "RU", flag: "🇷🇺", lat: 61.5240, lon: 105.3188,
        capital: "Moscow", continent: "Europe", population: "143,400,000", area: "17,098,242 km²",
        languages: "Russian", currency: "RUB (₽)",
        facts: ["Largest country by total land area, spanning 11 continuous time zones", "Lake Baikal holds approximately 20% of Earth's unfrozen freshwater", "Trans-Siberian Railway is the longest railway line in the world (9,289 km)"]
    },
    {
        name: "Switzerland", code: "CH", flag: "🇨🇭", lat: 46.8182, lon: 8.2275,
        capital: "Bern", continent: "Europe", population: "8,780,000", area: "41,285 km²",
        languages: "German, French, Italian, Romansh", currency: "CHF",
        facts: ["Maintained continuous armed neutrality in foreign conflicts since 1815", "Houses CERN, the European Organization for Nuclear Research", "Has four constitutionally designated national languages"]
    },
    {
        name: "Norway", code: "NO", flag: "🇳🇴", lat: 60.4720, lon: 8.4689,
        capital: "Oslo", continent: "Europe", population: "5,490,000", area: "385,207 km²",
        languages: "Norwegian", currency: "NOK (kr)",
        facts: ["Famous for spectacular glacial fjords carved during ancient ice ages", "Lærdal Tunnel (24.5 km) is the longest road tunnel on Earth", "Generates almost 100% of its domestic electricity from clean hydropower"]
    },

    // North America
    {
        name: "United States", code: "US", flag: "🇺🇸", lat: 37.0902, lon: -95.7129,
        capital: "Washington, D.C.", continent: "North America", population: "333,287,000", area: "9,833,520 km²",
        languages: "English", currency: "USD ($)",
        facts: ["World's largest economy by nominal Gross Domestic Product", "Yellowstone (founded 1872) was the world's first national park", "Lake Superior holds more water than all other North American Great Lakes combined"]
    },
    {
        name: "Canada", code: "CA", flag: "🇨🇦", lat: 56.1304, lon: -106.3468,
        capital: "Ottawa", continent: "North America", population: "38,930,000", area: "9,984,670 km²",
        languages: "English, French", currency: "CAD ($)",
        facts: ["Second largest country on Earth by total geographic area", "Has the longest coastline of any country (243,042 kilometers)", "Contains over 60% of all natural lakes on planet Earth"]
    },
    {
        name: "Mexico", code: "MX", flag: "🇲🇽", lat: 23.6345, lon: -102.5528,
        capital: "Mexico City", continent: "North America", population: "128,900,000", area: "1,964,375 km²",
        languages: "Spanish", currency: "MXN ($)",
        facts: ["Mexico City was built on the Aztec capital Tenochtitlan over Lake Texcoco", "Introduced chocolate, chili peppers, corn, and vanilla to the world", "Home to Chichen Itza, one of the New Seven Wonders of the World"]
    },
    {
        name: "Costa Rica", code: "CR", flag: "🇨🇷", lat: 9.7489, lon: -83.7534,
        capital: "San José", continent: "North America", population: "5,180,000", area: "51,100 km²",
        languages: "Spanish", currency: "CRC (₡)",
        facts: ["Abolished its national military army constitutionally in 1948", "Harbors roughly 5% of all biodiversity species on Earth", "Over 25% of its total land area is protected as national parks"]
    },

    // South America
    {
        name: "Brazil", code: "BR", flag: "🇧🇷", lat: -14.2350, lon: -51.9253,
        capital: "Brasília", continent: "South America", population: "214,300,000", area: "8,515,767 km²",
        languages: "Portuguese", currency: "BRL (R$)",
        facts: ["Houses 60% of the Amazon rainforest, the world's greatest biodiversity reservoir", "Fifth largest country in the world by both area and population", "Only Portuguese-speaking sovereign nation in the Americas"]
    },
    {
        name: "Argentina", code: "AR", flag: "🇦🇷", lat: -38.4161, lon: -63.6167,
        capital: "Buenos Aires", continent: "South America", population: "45,800,000", area: "2,780,400 km²",
        languages: "Spanish", currency: "ARS ($)",
        facts: ["Mount Aconcagua (6,961 m) is the highest peak in the Western and Southern Hemispheres", "Birthplace of the Tango and legendary gaucho cattle culture", "Iguazu Falls features 275 individual waterfalls spanning Argentina and Brazil"]
    },
    {
        name: "Peru", code: "PE", flag: "🇵🇪", lat: -9.1900, lon: -75.0152,
        capital: "Lima", continent: "South America", population: "33,700,000", area: "1,285,216 km²",
        languages: "Spanish, Quechua, Aymara", currency: "PEN (S/)",
        facts: ["Home to the ancient 15th-century Inca citadel of Machu Picchu", "The headwaters of the mighty Amazon River originate in the Peruvian Andes", "Cultivates more than 3,000 distinct varieties of native potatoes"]
    },
    {
        name: "Chile", code: "CL", flag: "🇨🇱", lat: -35.6751, lon: -71.5430,
        capital: "Santiago", continent: "South America", population: "19,500,000", area: "756,102 km²",
        languages: "Spanish", currency: "CLP ($)",
        facts: ["Stretches over 4,300 km from north to south while averaging just 177 km in width", "Atacama Desert in northern Chile is the driest non-polar desert on Earth", "World's largest producer and exporter of copper"]
    },

    // Africa
    {
        name: "Egypt", code: "EG", flag: "🇪🇬", lat: 26.8206, lon: 30.8025,
        capital: "Cairo", continent: "Africa", population: "109,300,000", area: "1,002,450 km²",
        languages: "Arabic", currency: "EGP (E£)",
        facts: ["Home to the Great Pyramids of Giza, the oldest and only standing Ancient Wonder", "The Nile River has sustained human civilization here for over 5,000 years", "The Suez Canal provides vital passage connecting the Mediterranean and Red Seas"]
    },
    {
        name: "South Africa", code: "ZA", flag: "🇿🇦", lat: -30.5595, lon: 22.9375,
        capital: "Pretoria", continent: "Africa", population: "60,000,000", area: "1,221,037 km²",
        languages: "11 official languages", currency: "ZAR (R)",
        facts: ["Has three constitutional capitals: Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)", "Known as the 'Rainbow Nation' celebrating cultural and ethnic diversity", "Table Mountain in Cape Town is one of the oldest mountains on the planet"]
    },
    {
        name: "Kenya", code: "KE", flag: "🇰🇪", lat: -0.0236, lon: 37.9062,
        capital: "Nairobi", continent: "Africa", population: "54,000,000", area: "580,367 km²",
        languages: "Swahili, English", currency: "KES (KSh)",
        facts: ["The Great Wildebeest Migration in the Maasai Mara is one of nature's greatest spectacles", "The geographic Equator passes directly through the center of the country", "Dominated global long-distance and marathon track running for decades"]
    },
    {
        name: "Nigeria", code: "NG", flag: "🇳🇬", lat: 9.0820, lon: 8.6753,
        capital: "Abuja", continent: "Africa", population: "223,800,000", area: "923,768 km²",
        languages: "English, Hausa, Yoruba, Igbo", currency: "NGN (₦)",
        facts: ["Most populous country in Africa and sixth most populous on Earth", "Nollywood is the world's second-largest film industry by volume of production", "More than 500 distinct indigenous languages are spoken across the country"]
    },

    // Oceania
    {
        name: "Australia", code: "AU", flag: "🇦🇺", lat: -25.2744, lon: 133.7751,
        capital: "Canberra", continent: "Oceania", population: "26,000,000", area: "7,692,024 km²",
        languages: "English", currency: "AUD ($)",
        facts: ["Only sovereign nation that occupies an entire geographic continent", "Great Barrier Reef is the largest living coral organism on Earth and visible from space", "Home to unique marsupial and monotreme species found nowhere else"]
    },
    {
        name: "New Zealand", code: "NZ", flag: "🇳🇿", lat: -40.9006, lon: 174.8860,
        capital: "Wellington", continent: "Oceania", population: "5,120,000", area: "268,021 km²",
        languages: "English, Māori", currency: "NZD ($)",
        facts: ["First self-governing country in the world to grant women the right to vote (1893)", "Filming location for Peter Jackson's epic The Lord of the Rings trilogy", "No location on either North or South Island is more than 128 km from the ocean"]
    }
];
