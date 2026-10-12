import json

# Load existing generate_countries.py
with open('generate_countries.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Load GeoJSON to compute centroids and ISO codes
with open('countries.geojson', 'r', encoding='utf-8') as f:
    geo = json.load(f)

# Execute existing countries definitions
scope = {}
exec(text, scope)
countries = scope['countries']

# The 29 remaining countries/territories to achieve 100% full globe coverage:
extra_countries = [
    {
        "name": "Antarctica", "flag": "🇦🇶", "capital": "Scientific Research Stations", "continent": "Antarctica",
        "pop": "1,000–5,000 (seasonal)", "area": "14,200,000 km²", "curr": "Various (National Currencies)", "lang": "English, Russian, Spanish, French",
        "facts": ["Coldest, driest, and windiest continent on Earth", "Governed peacefully under the 1959 Antarctic Treaty System", "Holds approximately 70% of the world's fresh water in ice"]
    },
    {
        "name": "French Southern and Antarctic Lands", "alt": ["Terres australes et antarctiques françaises", "French Southern Lands"], "flag": "🇹🇫", "capital": "Port-aux-Français", "continent": "Seven seas (open ocean)",
        "pop": "200 (scientists)", "area": "7,747 km²", "curr": "EUR (€)", "lang": "French",
        "facts": ["Overseas territory of France in the southern Indian Ocean", "Crucial breeding haven for king penguins and wandering albatrosses", "No permanent civilian residents, only researchers and military staff"]
    },
    {
        "name": "The Bahamas", "alt": ["Bahamas"], "flag": "🇧🇸", "capital": "Nassau", "continent": "North America",
        "pop": "410,000", "area": "13,880 km²", "curr": "BSD ($)", "lang": "English",
        "facts": ["Archipelago of over 700 coral islands and 2,400 cays", "Where Christopher Columbus first made landfall in the Americas in 1492", "Lucayan National Park contains one of the world's longest underwater limestone cave systems"]
    },
    {
        "name": "Belize", "flag": "🇧🇿", "capital": "Belmopan", "continent": "North America",
        "pop": "405,000", "area": "22,966 km²", "curr": "BZD ($)", "lang": "English, Spanish, Kriol",
        "facts": ["Only English-speaking sovereign country in Central America", "Home to the Belize Barrier Reef, the second-largest coral reef system in the world", "Features the famous Great Blue Hole, a giant marine sinkhole"]
    },
    {
        "name": "Bolivia", "alt": ["Plurinational State of Bolivia"], "flag": "🇧🇴", "capital": "Sucre (Constitutional), La Paz (Seat of Govt)", "continent": "South America",
        "pop": "12,200,000", "area": "1,098,581 km²", "curr": "BOB (Bs.)", "lang": "Spanish, Quechua, Aymara, Guaraní",
        "facts": ["Salar de Uyuni is the world's largest salt flat, spanning over 10,500 km²", "La Paz is the highest administrative capital in the world at 3,640 meters", "Has 37 official constitutional languages recognized nationwide"]
    },
    {
        "name": "Costa Rica", "flag": "🇨🇷", "capital": "San José", "continent": "North America",
        "pop": "5,200,000", "area": "51,100 km²", "curr": "CRC (₡)", "lang": "Spanish",
        "facts": ["Constitutionally abolished its standing army in 1948", "Contains nearly 6% of the world's total biodiversity despite its small size", "Over 98% of its electricity is generated from renewable energy sources"]
    },
    {
        "name": "Northern Cyprus", "alt": ["Turkish Republic of Northern Cyprus"], "flag": "🇹🇷", "capital": "North Nicosia", "continent": "Europe",
        "pop": "380,000", "area": "3,355 km²", "curr": "TRY (₺)", "lang": "Turkish",
        "facts": ["De facto state in the northern portion of the island of Cyprus", "Separated from the Republic of Cyprus by the UN Buffer Zone (Green Line)", "Ancient city of Salamis and Kyrenia Castle date back thousands of years"]
    },
    {
        "name": "Dominican Republic", "flag": "🇩🇴", "capital": "Santo Domingo", "continent": "North America",
        "pop": "11,200,000", "area": "48,670 km²", "curr": "DOP ($)", "lang": "Spanish",
        "facts": ["Shares the island of Hispaniola with Haiti", "Santo Domingo is the oldest permanent European settlement in the Americas (founded 1496)", "Pico Duarte is the highest mountain peak in the entire Caribbean (3,098 m)"]
    },
    {
        "name": "Ecuador", "flag": "🇪🇨", "capital": "Quito", "continent": "South America",
        "pop": "18,000,000", "area": "283,561 km²", "curr": "USD ($)", "lang": "Spanish, Kichwa, Shuar",
        "facts": ["Galápagos Islands inspired Charles Darwin's theory of evolution by natural selection", "Summit of Mount Chimborazo is the closest point on Earth's surface to the Sun", "First country in the world to recognize the Rights of Nature in its Constitution"]
    },
    {
        "name": "Fiji", "flag": "🇫🇯", "capital": "Suva", "continent": "Oceania",
        "pop": "930,000", "area": "18,274 km²", "curr": "FJD ($)", "lang": "English, Fijian, Fiji Hindi",
        "facts": ["Archipelago of over 330 volcanic islands and 500 islets in Melanesia", "The 180th meridian line runs right through Taveuni island", "World rugby sevens powerhouse, winning multiple Olympic gold medals"]
    },
    {
        "name": "Falkland Islands", "alt": ["Islas Malvinas"], "flag": "🇫🇰", "capital": "Stanley", "continent": "South America",
        "pop": "3,500", "area": "12,173 km²", "curr": "FKP (£)", "lang": "English",
        "facts": ["British Overseas Territory located in the South Atlantic Ocean", "Home to massive colonies of five different species of penguins", "Sheep farming and commercial squid fisheries form the economic backbone"]
    },
    {
        "name": "Greenland", "alt": ["Kalaallit Nunaat"], "flag": "🇬🇱", "capital": "Nuuk", "continent": "North America",
        "pop": "56,600", "area": "2,166,086 km²", "curr": "DKK (kr)", "lang": "Greenlandic, Danish",
        "facts": ["World's largest island that is not a continent", "Over 80% of its landmass is covered by the permanent Greenland Ice Sheet", "Autonomous territory within the Kingdom of Denmark"]
    },
    {
        "name": "Guatemala", "flag": "🇬🇹", "capital": "Guatemala City", "continent": "North America",
        "pop": "18,600,000", "area": "108,889 km²", "curr": "GTQ (Q)", "lang": "Spanish, Mayan languages",
        "facts": ["Cradle of the ancient Maya civilization, home to the ruins of Tikal", "Lake Atitlán is recognized as one of the world's most beautiful caldera lakes", "Over 30 volcanoes, including active Fuego, Pacaya, and Santiaguito"]
    },
    {
        "name": "Guyana", "flag": "🇬🇾", "capital": "Georgetown", "continent": "South America",
        "pop": "800,000", "area": "214,969 km²", "curr": "GYD ($)", "lang": "English",
        "facts": ["Only English-speaking sovereign nation in South America", "Kaieteur Falls is the world's largest single-drop waterfall by volume of water", "Nearly 85% of its land area remains covered by pristine Amazonian rainforest"]
    },
    {
        "name": "Honduras", "flag": "🇭🇳", "capital": "Tegucigalpa", "continent": "North America",
        "pop": "10,400,000", "area": "112,492 km²", "curr": "HNL (L)", "lang": "Spanish",
        "facts": ["Home to the ancient Maya city of Copán, renowned for its Hieroglyphic Stairway", "The Bay Islands sit on the Mesoamerican Barrier Reef, a premier dive destination", "Río Plátano Biosphere Reserve protects vital tropical rainforest and wildlife"]
    },
    {
        "name": "Haiti", "flag": "🇭🇹", "capital": "Port-au-Prince", "continent": "North America",
        "pop": "11,500,000", "area": "27,750 km²", "curr": "HTG (G)", "lang": "Haitian Creole, French",
        "facts": ["First independent nation of Latin America and the Caribbean (1804)", "First republic founded by formerly enslaved people who defeated colonial rule", "Citadelle Laferrière is the largest mountaintop fortress in the Americas"]
    },
    {
        "name": "Jamaica", "flag": "🇯🇲", "capital": "Kingston", "continent": "North America",
        "pop": "2,800,000", "area": "10,991 km²", "curr": "JMD ($)", "lang": "English, Jamaican Patois",
        "facts": ["Birthplace of reggae music and legendary cultural icon Bob Marley", "Produces the celebrated Blue Mountain Coffee, grown at altitudes up to 2,250 m", "Dominated global sprint athletics, led by world record holder Usain Bolt"]
    },
    {
        "name": "New Caledonia", "flag": "🇳🇨", "capital": "Nouméa", "continent": "Oceania",
        "pop": "270,000", "area": "18,576 km²", "curr": "XPF (Fr)", "lang": "French",
        "facts": ["French overseas territory home to the second-largest double barrier reef in the world", "Holds roughly 10% of the world's known nickel reserves", "Over 75% of native plant species are strictly endemic to the archipelago"]
    },
    {
        "name": "Nicaragua", "flag": "🇳🇮", "capital": "Managua", "continent": "North America",
        "pop": "6,900,000", "area": "130,375 km²", "curr": "NIO (C$)", "lang": "Spanish",
        "facts": ["Largest country in Central America, known as the 'Land of Lakes and Volcanoes'", "Lake Nicaragua is the only freshwater lake in the world inhabited by bull sharks", "Cerro Negro is an active volcano famous for extreme volcano boarding"]
    },
    {
        "name": "Panama", "flag": "🇵🇦", "capital": "Panama City", "continent": "North America",
        "pop": "4,400,000", "area": "75,417 km²", "curr": "PAB (B/.), USD ($)", "lang": "Spanish",
        "facts": ["The 82 km Panama Canal connects the Atlantic and Pacific oceans, handling ~5% of world trade", "Only place in the world where you can see the sun rise on the Pacific and set on the Atlantic", "Biodiversity bridge linking the flora and fauna of North and South America"]
    },
    {
        "name": "Puerto Rico", "flag": "🇵🇷", "capital": "San Juan", "continent": "North America",
        "pop": "3,200,000", "area": "9,104 km²", "curr": "USD ($)", "lang": "Spanish, English",
        "facts": ["Unincorporated territory of the United States in the northeastern Caribbean", "El Yunque is the only tropical rainforest in the US National Forest System", "Mosquito Bay in Vieques is the brightest bioluminescent bay in the world"]
    },
    {
        "name": "Paraguay", "flag": "🇵🇾", "capital": "Asunción", "continent": "South America",
        "pop": "6,800,000", "area": "406,752 km²", "curr": "PYG (₲)", "lang": "Guaraní, Spanish",
        "facts": ["One of only two landlocked countries in South America", "Nearly 90% of the population speaks indigenous Guaraní alongside Spanish", "Co-owns the Itaipu Dam, one of the world's largest hydroelectric power producers"]
    },
    {
        "name": "Solomon Islands", "flag": "🇸🇧", "capital": "Honiara", "continent": "Oceania",
        "pop": "720,000", "area": "28,896 km²", "curr": "SBD ($)", "lang": "English, Pijin",
        "facts": ["Consists of six major islands and over 900 smaller islands in Melanesia", "Guadalcanal was the site of a turning point campaign in World War II in the Pacific", "Surrounded by world-renowned dive sites and wartime shipwrecks"]
    },
    {
        "name": "El Salvador", "flag": "🇸🇻", "capital": "San Salvador", "continent": "North America",
        "pop": "6,350,000", "area": "21,041 km²", "curr": "USD ($), BTC (₿)", "lang": "Spanish",
        "facts": ["Smallest and most densely populated sovereign nation in Central America", "Known as the 'Land of Volcanoes' with more than 20 active volcanoes", "First country in the world to adopt Bitcoin as legal tender in 2021"]
    },
    {
        "name": "Suriname", "flag": "🇸🇷", "capital": "Paramaribo", "continent": "South America",
        "pop": "620,000", "area": "163,820 km²", "curr": "SRD ($)", "lang": "Dutch, Sranan Tongo",
        "facts": ["Only sovereign state outside Europe where Dutch is the official national language", "Over 93% of its surface is covered by dense tropical rainforest, making it carbon-negative", "Historic inner city of Paramaribo is a UNESCO World Heritage site of Dutch colonial wooden architecture"]
    },
    {
        "name": "East Timor", "alt": ["Timor-Leste"], "flag": "🇹🇱", "capital": "Dili", "continent": "Asia",
        "pop": "1,340,000", "area": "14,919 km²", "curr": "USD ($)", "lang": "Tetum, Portuguese",
        "facts": ["First new sovereign state of the 21st century, gaining independence in 2002", "Waters around Atauro Island contain the highest biodiversity of reef fish in the world", "One of only two predominantly Christian nations in Southeast Asia (along with the Philippines)"]
    },
    {
        "name": "Trinidad and Tobago", "flag": "🇹🇹", "capital": "Port of Spain", "continent": "North America",
        "pop": "1,530,000", "area": "5,130 km²", "curr": "TTD ($)", "lang": "English",
        "facts": ["Birthplace of the steelpan (steel drum), calypso, soca music, and the limbo dance", "Pitch Lake in La Brea is the world's largest natural commercial asphalt deposit", "Leading producer of petroleum and liquefied natural gas in the Caribbean"]
    },
    {
        "name": "Uruguay", "flag": "🇺🇾", "capital": "Montevideo", "continent": "South America",
        "pop": "3,400,000", "area": "176,215 km²", "curr": "UYU ($)", "lang": "Spanish",
        "facts": ["Highest literacy rate and ranked first in Latin America for democracy, peace, and low corruption", "Hosted and won the very first FIFA World Cup in Montevideo in 1930", "Generates over 95% of its electricity from clean renewable wind and hydro sources"]
    },
    {
        "name": "Vanuatu", "flag": "🇻🇺", "capital": "Port Vila", "continent": "Oceania",
        "pop": "320,000", "area": "12,189 km²", "curr": "VUV (VT)", "lang": "Bislama, English, French",
        "facts": ["Archipelago of 83 volcanic islands spanning 1,300 km in the South Pacific", "Birthplace of land diving (Naghol) on Pentecost Island, the precursor to modern bungee jumping", "Mount Yasur on Tanna Island is one of the world's most accessible continuously active volcanoes"]
    }
]

# Append extras if not already present
c_names = {c['name'].lower() for c in countries}
for ex in extra_countries:
    if ex['name'].lower() not in c_names:
        countries.append(ex)
        c_names.add(ex['name'].lower())

# Helper: Compute centroid for GeoJSON feature
def get_feat_center(feat):
    coords = feat['geometry']['coordinates']
    total_lat = 0
    total_lng = 0
    count = 0
    def walk(c):
        nonlocal total_lat, total_lng, count
        if isinstance(c[0], (int, float)):
            total_lng += c[0]
            total_lat += c[1]
            count += 1
        else:
            for sub in c:
                walk(sub)
    walk(coords)
    return (round(total_lat/count, 4), round(total_lng/count, 4)) if count > 0 else (0, 0)

# Build map from GeoJSON
geo_map = {}
for feat in geo['features']:
    props = feat['properties']
    admin = (props.get('ADMIN') or props.get('NAME') or '').strip().lower()
    geo_map[admin] = feat
    iso2 = (props.get('ISO_A2') or '').strip().lower()
    if iso2 and iso2 != '-99':
        geo_map[iso2] = feat
    iso3 = (props.get('ISO_A3') or '').strip().lower()
    if iso3 and iso3 != '-99':
        geo_map[iso3] = feat

# Enrich each country object
normalized_countries = []
for c in countries:
    name_low = c['name'].lower()
    feat = geo_map.get(name_low)
    
    # Try alt names
    if not feat and 'alt' in c:
        alts = [c['alt']] if isinstance(c['alt'], str) else c['alt']
        for a in alts:
            feat = geo_map.get(a.lower())
            if feat:
                break
    
    # Try partial name
    if not feat:
        for k, f in geo_map.items():
            if (len(k) > 4 and k in name_low) or (len(name_low) > 4 and name_low in k):
                feat = f
                break

    lat, lon = c.get('lat'), c.get('lon')
    iso2 = c.get('code') or c.get('iso2')
    iso3 = c.get('iso3')
    
    if feat:
        props = feat['properties']
        if lat is None or lon is None:
            c_lat, c_lon = get_feat_center(feat)
            lat = c_lat
            lon = c_lon
        if not iso2:
            iso2_val = props.get('ISO_A2')
            if iso2_val and iso2_val != '-99':
                iso2 = iso2_val
        if not iso3:
            iso3_val = props.get('ISO_A3')
            if iso3_val and iso3_val != '-99':
                iso3 = iso3_val

    # Ensure robust properties
    curr_val = c.get('currency') or c.get('curr') or 'N/A'
    lang_val = c.get('languages') or c.get('lang') or 'N/A'
    pop_val = c.get('population') or c.get('pop') or 'N/A'

    # Build clean standardized country object
    obj = {
        "name": c['name'],
        "flag": c.get('flag', '🌐'),
        "capital": c.get('capital', 'N/A'),
        "continent": c.get('continent', 'Unknown'),
        "population": pop_val,
        "pop": pop_val,
        "area": c.get('area', 'N/A'),
        "currency": curr_val,
        "curr": curr_val,
        "languages": lang_val,
        "lang": lang_val,
        "lat": lat if lat is not None else 0.0,
        "lon": lon if lon is not None else 0.0,
        "facts": c.get('facts', [])
    }
    if 'alt' in c:
        obj['alt'] = [c['alt']] if isinstance(c['alt'], str) else c['alt']
    if iso2:
        obj['code'] = iso2
        obj['iso2'] = iso2
    if iso3:
        obj['iso3'] = iso3

    normalized_countries.append(obj)

# Write out countries-data.js
output_js = """/**
 * Countries Dataset for 3D Globe Study Tool
 * Complete 100% coverage with Capitals, Currencies, Languages, and Facts
 */
const COUNTRIES_DATA = """ + json.dumps(normalized_countries, indent=2, ensure_ascii=False) + ";\n"

with open('countries-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f"Successfully processed and wrote {len(normalized_countries)} complete countries to countries-data.js!")
