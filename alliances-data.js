/**
 * Global Alliances & Geopolitical Blocs Dataset
 */

const ALLIANCES_DATA = {
    "nato": {
        name: "NATO (North Atlantic Treaty Organization)",
        badge: "🛡️ Defense Alliance",
        color: "rgba(59, 130, 246, 0.55)", // Blue
        strokeColor: "#3b82f6",
        hq: "Brussels, Belgium",
        founded: "1949 (Washington Treaty)",
        membersCount: 32,
        description: "Intergovernmental military alliance based on collective defense (Article 5: an attack against one is an attack against all).",
        facts: [
            "Formed in 1949 by 12 founding members during the Cold War",
            "Article 5 collective defense was invoked for the first and only time after the 9/11 attacks in 2001",
            "Recently expanded to 32 members with Finland (2023) and Sweden (2024)"
        ],
        countries: [
            "United States", "United Kingdom", "France", "Germany", "Italy", "Canada",
            "Turkey", "Spain", "Poland", "Norway", "Netherlands", "Belgium", "Denmark",
            "Portugal", "Greece", "Czech Republic", "Hungary", "Romania", "Finland",
            "Sweden", "Estonia", "Latvia", "Lithuania", "Slovakia", "Slovenia", "Bulgaria",
            "Croatia", "Albania", "Montenegro", "North Macedonia", "Iceland", "Luxembourg"
        ]
    },
    "brics": {
        name: "BRICS+ (Emerging Economic Powers)",
        badge: "📈 Economic Bloc",
        color: "rgba(239, 68, 68, 0.55)", // Red
        strokeColor: "#ef4444",
        hq: "Rotating Presidency (New Development Bank in Shanghai)",
        founded: "2006 (Expanded in 2024)",
        membersCount: 10,
        description: "Alliance of major emerging market economies seeking to reshape global governance, multilateral trade, and alternative currency settlements.",
        facts: [
            "Accounts for over 45% of world population and over 35% of global GDP by purchasing power parity (PPP)",
            "Originally founded as BRIC (Brazil, Russia, India, China), with South Africa joining in 2010",
            "Massively expanded on Jan 1, 2024, inviting Egypt, Ethiopia, Iran, Saudi Arabia, and the UAE"
        ],
        countries: [
            "Brazil", "Russia", "India", "China", "South Africa",
            "Egypt", "Ethiopia", "Iran", "Saudi Arabia", "United Arab Emirates"
        ]
    },
    "eu": {
        name: "European Union (EU)",
        badge: "🇪🇺 Political & Economic Union",
        color: "rgba(234, 179, 8, 0.55)", // Yellow / Gold
        strokeColor: "#eab308",
        hq: "Brussels, Belgium / Strasbourg, France",
        founded: "1993 (Maastricht Treaty)",
        membersCount: 27,
        description: "Supranational political and economic union operating a single internal market with standardized laws, free movement of goods, capital, services, and people.",
        facts: [
            "Features the Eurozone currency union used by 20 of its member states",
            "Created the Schengen Area allowing passport-free travel across national borders",
            "Awarded the Nobel Peace Prize in 2012 for advancing peace and reconciliation in Europe"
        ],
        countries: [
            "Germany", "France", "Italy", "Spain", "Poland", "Netherlands", "Belgium",
            "Sweden", "Austria", "Denmark", "Finland", "Ireland", "Portugal", "Greece",
            "Czech Republic", "Hungary", "Romania", "Slovakia", "Bulgaria", "Croatia",
            "Lithuania", "Slovenia", "Latvia", "Estonia", "Cyprus", "Luxembourg", "Malta"
        ]
    },
    "opec": {
        name: "OPEC & OPEC+ (Petroleum Exporters)",
        badge: "🛢️ Energy Cartel",
        color: "rgba(16, 185, 129, 0.55)", // Emerald Green
        strokeColor: "#10b981",
        hq: "Vienna, Austria",
        founded: "1960 (Baghdad Conference)",
        membersCount: 12,
        description: "Intergovernmental organization that coordinates petroleum policies and crude oil production quotas to stabilize international energy markets.",
        facts: [
            "Member countries account for roughly 40% of global oil production and ~80% of proven reserves",
            "OPEC+ coordinates with non-member producers led by Russia, Kazakhstan, and Mexico",
            "Saudi Arabia acts as the group's de facto leader and world swing oil producer"
        ],
        countries: [
            "Saudi Arabia", "United Arab Emirates", "Iraq", "Iran", "Kuwait",
            "Nigeria", "Algeria", "Venezuela", "Libya", "Republic of the Congo", "Gabon", "Equatorial Guinea"
        ]
    },
    "g7": {
        name: "G7 (Group of Seven)",
        badge: "🏛️ Advanced Economies",
        color: "rgba(168, 85, 247, 0.55)", // Purple
        strokeColor: "#a855f7",
        hq: "Rotating Annual Presidency",
        founded: "1975",
        membersCount: 7,
        description: "Informal forum of seven of the world's most advanced industrialized liberal democratic economies.",
        facts: [
            "Members represent roughly half of global net wealth and ~30% of global nominal GDP",
            "Meets annually to discuss international monetary policy, security, and global crises",
            "Russia was suspended from the former G8 in 2014"
        ],
        countries: [
            "United States", "Japan", "Germany", "United Kingdom", "France", "Italy", "Canada"
        ]
    },
    "asean": {
        name: "ASEAN (Southeast Asian Nations)",
        badge: "🌴 Regional Union",
        color: "rgba(249, 115, 22, 0.55)", // Orange
        strokeColor: "#f97316",
        hq: "Jakarta, Indonesia",
        founded: "1967 (Bangkok Declaration)",
        membersCount: 10,
        description: "Regional union promoting economic, political, and security cooperation among Southeast Asian nations along key trade corridors.",
        facts: [
            "Home to over 670 million people and a collective economy ranking among the top 5 globally",
            "Controls the Strait of Malacca and the strategic South China Sea maritime corridors",
            "Operates under the 'ASEAN Way' principle of consensus and non-interference"
        ],
        countries: [
            "Indonesia", "Malaysia", "Singapore", "Thailand", "Philippines",
            "Vietnam", "Myanmar", "Cambodia", "Laos", "Brunei"
        ]
    }
};
