const CITIES_DATA = [
  {
    "name": "New York City",
    "country": "United States",
    "lat": 40.7128,
    "lon": -74.006,
    "pop": "19.0M",
    "tier": 1,
    "isCapital": false,
    "desc": "Global finance, cultural & UN headquarters"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "lat": 34.0522,
    "lon": -118.2437,
    "pop": "12.5M",
    "tier": 1,
    "isCapital": false,
    "desc": "Global entertainment & Pacific commerce capital"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "lat": 41.8781,
    "lon": -87.6298,
    "pop": "8.9M",
    "tier": 2,
    "isCapital": false,
    "desc": "Great Lakes economic & rail transportation center"
  },
  {
    "name": "Houston",
    "country": "United States",
    "lat": 29.7604,
    "lon": -95.3698,
    "pop": "6.7M",
    "tier": 2,
    "isCapital": false,
    "desc": "Global energy capital and NASA Space Center"
  },
  {
    "name": "San Francisco",
    "country": "United States",
    "lat": 37.7749,
    "lon": -122.4194,
    "pop": "4.7M",
    "tier": 2,
    "isCapital": false,
    "desc": "Silicon Valley tech & innovation hub"
  },
  {
    "name": "Washington, D.C.",
    "country": "United States",
    "lat": 38.9072,
    "lon": -77.0369,
    "pop": "5.4M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of the United States of America"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.6532,
    "lon": -79.3832,
    "pop": "6.3M",
    "tier": 1,
    "isCapital": false,
    "desc": "Financial and commercial capital of Canada"
  },
  {
    "name": "Vancouver",
    "country": "Canada",
    "lat": 49.2827,
    "lon": -123.1207,
    "pop": "2.6M",
    "tier": 2,
    "isCapital": false,
    "desc": "Pacific maritime gateway of Canada"
  },
  {
    "name": "Montreal",
    "country": "Canada",
    "lat": 45.5017,
    "lon": -73.5673,
    "pop": "4.2M",
    "tier": 2,
    "isCapital": false,
    "desc": "Historic French-speaking cultural metropolis"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "lat": 19.4326,
    "lon": -99.1332,
    "pop": "22.3M",
    "tier": 1,
    "isCapital": true,
    "desc": "Historic Aztec capital and mega-metropolis"
  },
  {
    "name": "Guadalajara",
    "country": "Mexico",
    "lat": 20.6597,
    "lon": -103.3496,
    "pop": "5.3M",
    "tier": 2,
    "isCapital": false,
    "desc": "Cultural heartland and tech manufacturing hub"
  },
  {
    "name": "Havana",
    "country": "Cuba",
    "lat": 23.1136,
    "lon": -82.3666,
    "pop": "2.1M",
    "tier": 2,
    "isCapital": true,
    "desc": "Historic Caribbean capital & port"
  },
  {
    "name": "S\u00e3o Paulo",
    "country": "Brazil",
    "lat": -23.5505,
    "lon": -46.6333,
    "pop": "22.6M",
    "tier": 1,
    "isCapital": false,
    "desc": "Largest city in the Americas and financial center"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.9068,
    "lon": -43.1729,
    "pop": "13.6M",
    "tier": 1,
    "isCapital": false,
    "desc": "Iconic coastal metropolis with Christ the Redeemer"
  },
  {
    "name": "Bras\u00edlia",
    "country": "Brazil",
    "lat": -15.7975,
    "lon": -47.8919,
    "pop": "3.1M",
    "tier": 2,
    "isCapital": true,
    "desc": "Planned federal capital designed by Oscar Niemeyer"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.6037,
    "lon": -58.3816,
    "pop": "15.4M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of Argentina on the R\u00edo de la Plata"
  },
  {
    "name": "Bogot\u00e1",
    "country": "Colombia",
    "lat": 4.711,
    "lon": -74.0721,
    "pop": "11.3M",
    "tier": 1,
    "isCapital": true,
    "desc": "High-altitude Andean capital of Colombia"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "lat": -12.0464,
    "lon": -77.0428,
    "pop": "11.0M",
    "tier": 1,
    "isCapital": true,
    "desc": "Pacific coastal capital of Peru"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "lat": -33.4489,
    "lon": -70.6693,
    "pop": "7.0M",
    "tier": 1,
    "isCapital": true,
    "desc": "Andean valley metropolis and capital of Chile"
  },
  {
    "name": "Caracas",
    "country": "Venezuela",
    "lat": 10.4806,
    "lon": -66.9036,
    "pop": "2.9M",
    "tier": 2,
    "isCapital": true,
    "desc": "Coastal mountain capital of Venezuela"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "lat": 51.5074,
    "lon": -0.1278,
    "pop": "9.6M",
    "tier": 1,
    "isCapital": true,
    "desc": "Global financial, political & cultural center"
  },
  {
    "name": "Paris",
    "country": "France",
    "lat": 48.8566,
    "lon": 2.3522,
    "pop": "11.2M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of France on the River Seine"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "lat": 52.52,
    "lon": 13.405,
    "pop": "3.7M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of Germany and European startup hub"
  },
  {
    "name": "Frankfurt",
    "country": "Germany",
    "lat": 50.1109,
    "lon": 8.6821,
    "pop": "2.3M",
    "tier": 2,
    "isCapital": false,
    "desc": "Financial capital and European Central Bank seat"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "lat": 48.1351,
    "lon": 11.582,
    "pop": "1.5M",
    "tier": 2,
    "isCapital": false,
    "desc": "Bavarian industrial and engineering capital"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "lat": 40.4168,
    "lon": -3.7038,
    "pop": "6.7M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital and geographic heart of Spain"
  },
  {
    "name": "Barcelona",
    "country": "Spain",
    "lat": 41.3851,
    "lon": 2.1734,
    "pop": "5.6M",
    "tier": 2,
    "isCapital": false,
    "desc": "Mediterranean art, architecture and port hub"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "lat": 41.9028,
    "lon": 12.4964,
    "pop": "4.3M",
    "tier": 1,
    "isCapital": true,
    "desc": "The Eternal City and historic Roman imperial center"
  },
  {
    "name": "Milan",
    "country": "Italy",
    "lat": 45.4642,
    "lon": 9.19,
    "pop": "3.2M",
    "tier": 2,
    "isCapital": false,
    "desc": "Global fashion and Italian economic powerhouse"
  },
  {
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.3676,
    "lon": 4.9041,
    "pop": "2.5M",
    "tier": 2,
    "isCapital": true,
    "desc": "Historic canal city and international trade hub"
  },
  {
    "name": "Brussels",
    "country": "Belgium",
    "lat": 50.8503,
    "lon": 4.3517,
    "pop": "2.1M",
    "tier": 2,
    "isCapital": true,
    "desc": "De facto capital of the European Union & NATO"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "lat": 48.2082,
    "lon": 16.3738,
    "pop": "2.0M",
    "tier": 2,
    "isCapital": true,
    "desc": "Historic imperial Danube capital and UN seat"
  },
  {
    "name": "Stockholm",
    "country": "Sweden",
    "lat": 59.3293,
    "lon": 18.0686,
    "pop": "1.7M",
    "tier": 2,
    "isCapital": true,
    "desc": "Capital of Sweden across 14 Baltic islands"
  },
  {
    "name": "Warsaw",
    "country": "Poland",
    "lat": 52.2297,
    "lon": 21.0122,
    "pop": "1.8M",
    "tier": 2,
    "isCapital": true,
    "desc": "Capital of Poland on the Vistula River"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "lat": 37.9838,
    "lon": 23.7275,
    "pop": "3.1M",
    "tier": 2,
    "isCapital": true,
    "desc": "Cradle of Western civilization and democracy"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "lat": 55.7558,
    "lon": 37.6173,
    "pop": "13.0M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of Russia with the historic Kremlin"
  },
  {
    "name": "St. Petersburg",
    "country": "Russia",
    "lat": 59.9343,
    "lon": 30.3351,
    "pop": "5.4M",
    "tier": 2,
    "isCapital": false,
    "desc": "Baltic cultural capital founded by Peter the Great"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "lat": 41.0082,
    "lon": 28.9784,
    "pop": "15.9M",
    "tier": 1,
    "isCapital": false,
    "desc": "Transcontinental megacity bridging Europe & Asia"
  },
  {
    "name": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.2048,
    "lon": 55.2708,
    "pop": "3.6M",
    "tier": 1,
    "isCapital": false,
    "desc": "Global aviation, trade hub & home to Burj Khalifa"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "lat": 24.7136,
    "lon": 46.6753,
    "pop": "7.7M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of Saudi Arabia and financial engine"
  },
  {
    "name": "Doha",
    "country": "Qatar",
    "lat": 25.2854,
    "lon": 51.531,
    "pop": "2.4M",
    "tier": 2,
    "isCapital": true,
    "desc": "Persian Gulf LNG energy and aviation hub"
  },
  {
    "name": "Tel Aviv",
    "country": "Israel",
    "lat": 32.0853,
    "lon": 34.7818,
    "pop": "4.2M",
    "tier": 2,
    "isCapital": false,
    "desc": "Mediterranean high-tech and financial center"
  },
  {
    "name": "Tehran",
    "country": "Iran",
    "lat": 35.6892,
    "lon": 51.389,
    "pop": "9.4M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of Iran under the Alborz mountains"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "lat": 33.3152,
    "lon": 44.3661,
    "pop": "7.5M",
    "tier": 2,
    "isCapital": true,
    "desc": "Historic Tigris capital of Mesopotamia"
  },
  {
    "name": "New Delhi",
    "country": "India",
    "lat": 28.6139,
    "lon": 77.209,
    "pop": "32.9M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of India and historic imperial center"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "lat": 19.076,
    "lon": 72.8777,
    "pop": "21.3M",
    "tier": 1,
    "isCapital": false,
    "desc": "Financial capital of India on the Arabian Sea"
  },
  {
    "name": "Bengaluru",
    "country": "India",
    "lat": 12.9716,
    "lon": 77.5946,
    "pop": "13.6M",
    "tier": 2,
    "isCapital": false,
    "desc": "Silicon Valley of India and aerospace center"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "lat": 22.5726,
    "lon": 88.3639,
    "pop": "15.3M",
    "tier": 2,
    "isCapital": false,
    "desc": "Historic cultural and maritime gateway on the Hooghly"
  },
  {
    "name": "Chennai",
    "country": "India",
    "lat": 13.0827,
    "lon": 80.2707,
    "pop": "11.9M",
    "tier": 2,
    "isCapital": false,
    "desc": "Automotive and IT manufacturing hub on Bay of Bengal"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "lat": 17.385,
    "lon": 78.4867,
    "pop": "10.8M",
    "tier": 2,
    "isCapital": false,
    "desc": "Pharma and IT tech hub of the Deccan"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "lat": 24.8607,
    "lon": 67.0011,
    "pop": "17.2M",
    "tier": 1,
    "isCapital": false,
    "desc": "Megacity port and economic engine of Pakistan"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "lat": 31.5204,
    "lon": 74.3587,
    "pop": "13.5M",
    "tier": 2,
    "isCapital": false,
    "desc": "Historic Mughal cultural heartland of Punjab"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "lat": 23.8103,
    "lon": 90.4125,
    "pop": "23.2M",
    "tier": 1,
    "isCapital": true,
    "desc": "Textile manufacturing megacity on the Buriganga"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "lat": 35.6762,
    "lon": 139.6503,
    "pop": "37.4M",
    "tier": 1,
    "isCapital": true,
    "desc": "World largest metropolitan area and tech capital"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "lat": 34.6937,
    "lon": 135.5023,
    "pop": "19.0M",
    "tier": 2,
    "isCapital": false,
    "desc": "Commercial culinary and industrial hub of Kansai"
  },
  {
    "name": "Seoul",
    "country": "South Korea",
    "lat": 37.5665,
    "lon": 126.978,
    "pop": "9.7M",
    "tier": 1,
    "isCapital": true,
    "desc": "High-tech economic capital of South Korea"
  },
  {
    "name": "Beijing",
    "country": "China",
    "lat": 39.9042,
    "lon": 116.4074,
    "pop": "21.9M",
    "tier": 1,
    "isCapital": true,
    "desc": "Capital of China and seat of government"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "lat": 31.2304,
    "lon": 121.4737,
    "pop": "29.2M",
    "tier": 1,
    "isCapital": false,
    "desc": "World busiest container port and financial hub"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "lat": 23.1291,
    "lon": 113.2644,
    "pop": "14.3M",
    "tier": 2,
    "isCapital": false,
    "desc": "Pearl River Delta manufacturing powerhouse"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "lat": 22.5431,
    "lon": 114.0579,
    "pop": "17.6M",
    "tier": 2,
    "isCapital": false,
    "desc": "Hardware innovation hub and Special Economic Zone"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "lat": 22.3193,
    "lon": 114.1694,
    "pop": "7.5M",
    "tier": 1,
    "isCapital": false,
    "desc": "Global trade and international finance center"
  },
  {
    "name": "Taipei",
    "country": "Taiwan",
    "lat": 25.033,
    "lon": 121.5654,
    "pop": "2.6M",
    "tier": 2,
    "isCapital": true,
    "desc": "Semiconductor tech and economic capital of Taiwan"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "lat": 13.7563,
    "lon": 100.5018,
    "pop": "11.1M",
    "tier": 1,
    "isCapital": true,
    "desc": "Metropolis on the Chao Phraya River"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "lat": 1.3521,
    "lon": 103.8198,
    "pop": "5.9M",
    "tier": 1,
    "isCapital": true,
    "desc": "Sovereign island city-state and maritime nexus"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 3.139,
    "lon": 101.6869,
    "pop": "8.6M",
    "tier": 2,
    "isCapital": true,
    "desc": "Capital of Malaysia featuring the Petronas Towers"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "lat": -6.2088,
    "lon": 106.8456,
    "pop": "11.1M",
    "tier": 1,
    "isCapital": true,
    "desc": "Megacity capital of Indonesia on Java"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "lat": 14.5995,
    "lon": 120.9842,
    "pop": "14.7M",
    "tier": 1,
    "isCapital": true,
    "desc": "Dense coastal archipelago capital of the Philippines"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "lat": 30.0444,
    "lon": 31.2357,
    "pop": "22.2M",
    "tier": 1,
    "isCapital": true,
    "desc": "Largest metropolis in Africa and Arab world"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "lat": 6.5244,
    "lon": 3.3792,
    "pop": "15.9M",
    "tier": 1,
    "isCapital": false,
    "desc": "Economic and commercial powerhouse of West Africa"
  },
  {
    "name": "Johannesburg",
    "country": "South Africa",
    "lat": -26.2041,
    "lon": 28.0473,
    "pop": "6.1M",
    "tier": 1,
    "isCapital": false,
    "desc": "Financial and mining center of Southern Africa"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "lat": -33.9249,
    "lon": 18.4241,
    "pop": "4.8M",
    "tier": 2,
    "isCapital": true,
    "desc": "Legislative capital beneath Table Mountain"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "lat": -1.2921,
    "lon": 36.8219,
    "pop": "5.3M",
    "tier": 1,
    "isCapital": true,
    "desc": "East African financial and diplomatic hub"
  },
  {
    "name": "Addis Ababa",
    "country": "Ethiopia",
    "lat": 9.032,
    "lon": 38.748,
    "pop": "5.4M",
    "tier": 2,
    "isCapital": true,
    "desc": "Diplomatic capital of Africa and AU headquarters"
  },
  {
    "name": "Kinshasa",
    "country": "DR Congo",
    "lat": -4.3224,
    "lon": 15.307,
    "pop": "17.1M",
    "tier": 1,
    "isCapital": true,
    "desc": "Largest French-speaking megacity in the world"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "lat": -33.8688,
    "lon": 151.2093,
    "pop": "5.3M",
    "tier": 1,
    "isCapital": false,
    "desc": "Iconic harbour city with the Opera House"
  },
  {
    "name": "Melbourne",
    "country": "Australia",
    "lat": -37.8136,
    "lon": 144.9631,
    "pop": "5.1M",
    "tier": 2,
    "isCapital": false,
    "desc": "Cultural, sporting and arts capital of Australia"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "lat": -27.4698,
    "lon": 153.0251,
    "pop": "2.6M",
    "tier": 2,
    "isCapital": false,
    "desc": "Pacific coast capital of Queensland"
  },
  {
    "name": "Auckland",
    "country": "New Zealand",
    "lat": -36.8485,
    "lon": 174.7633,
    "pop": "1.7M",
    "tier": 2,
    "isCapital": false,
    "desc": "Largest city in New Zealand between two harbours"
  },
  {
    "name": "Wellington",
    "country": "New Zealand",
    "lat": -41.2865,
    "lon": 174.7762,
    "pop": "420K",
    "tier": 2,
    "isCapital": true,
    "desc": "Southernmost national capital on Earth"
  }
];