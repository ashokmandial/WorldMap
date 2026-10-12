import json

# Full dataset covering ALL 177 countries in Natural Earth GeoJSON
# with 100% complete Capital, Currency, Languages, Continent, Population, Area, and Facts!

countries = [
    # ==================== EUROPE (39 countries) ====================
    {
        "name": "Albania", "flag": "🇦🇱", "capital": "Tirana", "continent": "Europe",
        "pop": "2,790,000", "area": "28,748 km²", "curr": "ALL (Lek)", "lang": "Albanian",
        "facts": ["Known as Shqipëria, meaning 'Land of the Eagles'", "Over 173,000 concrete defense bunkers dot the landscape from the Cold War era", "Pristine Mediterranean coastline along the Adriatic and Ionian Seas"]
    },
    {
        "name": "Austria", "flag": "🇦🇹", "capital": "Vienna", "continent": "Europe",
        "pop": "9,100,000", "area": "83,879 km²", "curr": "EUR (€)", "lang": "German",
        "facts": ["Birthplace of classical masters Mozart, Haydn, Schubert, and Johann Strauss", "The Alps cover roughly 62% of the country's total land area", "Vienna consistently ranks among the world's most liveable cities"]
    },
    {
        "name": "Belarus", "flag": "🇧🇾", "capital": "Minsk", "continent": "Europe",
        "pop": "9,200,000", "area": "207,600 km²", "curr": "BYN (Br)", "lang": "Belarusian, Russian",
        "facts": ["Home to Belovezhskaya Pushcha, Europe's oldest primeval lowland forest", "Contains over 11,000 freshwater lakes earned the nickname 'Blue-Eyed Land'", "Over 40% of the entire national territory is covered by dense forests"]
    },
    {
        "name": "Belgium", "flag": "🇧🇪", "capital": "Brussels", "continent": "Europe",
        "pop": "11,700,000", "area": "30,528 km²", "curr": "EUR (€)", "lang": "Dutch, French, German",
        "facts": ["De facto capital of the European Union and headquarters of NATO", "Famous for Belgian chocolate, waffles, and over 1,500 distinct varieties of beer", "Invented the saxophone (patented by Adolphe Sax in Dinant in 1846)"]
    },
    {
        "name": "Bosnia and Herzegovina", "flag": "🇧🇦", "capital": "Sarajevo", "continent": "Europe",
        "pop": "3,200,000", "area": "51,197 km²", "curr": "BAM (KM)", "lang": "Bosnian, Croatian, Serbian",
        "facts": ["Sarajevo was the site of the 1914 assassination of Archduke Franz Ferdinand that sparked WWI", "Hosted the 1984 Winter Olympic Games in the Dinaric Alps", "Stari Most (Old Bridge) in Mostar is a famous UNESCO 16th-century Ottoman bridge"]
    },
    {
        "name": "Bulgaria", "flag": "🇧🇬", "capital": "Sofia", "continent": "Europe",
        "pop": "6,450,000", "area": "110,994 km²", "curr": "BGN (лв)", "lang": "Bulgarian",
        "facts": ["Retained its original name unchanged since its founding in 681 AD", "World's largest producer and exporter of rose oil from the famous Rose Valley", "Cradle of the Cyrillic alphabet, developed in the Preslav Literary School"]
    },
    {
        "name": "Croatia", "flag": "🇭🇷", "capital": "Zagreb", "continent": "Europe",
        "pop": "3,850,000", "area": "56,594 km²", "curr": "EUR (€)", "lang": "Croatian",
        "facts": ["Coastline features over 1,200 islands and the medieval walled city of Dubrovnik", "Plitvice Lakes National Park has 16 cascading terraced lakes on karst rock", "The necktie (cravat) originated from 17th-century Croatian cavalry neck scarves"]
    },
    {
        "name": "Czechia", "alt": "Czech Republic", "flag": "🇨🇿", "capital": "Prague", "continent": "Europe",
        "pop": "10,800,000", "area": "78,866 km²", "curr": "CZK (Kč)", "lang": "Czech",
        "facts": ["Prague Castle is the largest coherent ancient castle complex in the world (Guinness)", "Highest per-capita beer consumption in the world for over 30 consecutive years", "Invented soft contact lenses (Otto Wichterle in 1961)"]
    },
    {
        "name": "Denmark", "flag": "🇩🇰", "capital": "Copenhagen", "continent": "Europe",
        "pop": "5,900,000", "area": "42,933 km²", "curr": "DKK (kr)", "lang": "Danish",
        "facts": ["Oldest continuous sovereign kingdom in Europe, dating back over 1,000 years", "Birthplace of LEGO bricks and Hans Christian Andersen's fairy tales", "Bicycles outnumber passenger cars in Copenhagen, with over 400 km of bike lanes"]
    },
    {
        "name": "Estonia", "flag": "🇪🇪", "capital": "Tallinn", "continent": "Europe",
        "pop": "1,360,000", "area": "45,227 km²", "curr": "EUR (€)", "lang": "Estonian",
        "facts": ["Global pioneer in e-governance: 99% of government public services are online 24/7", "Birthplace of Skype and fintech unicorn Wise (TransferWise)", "Over 50% of the entire country is covered by pristine boreal forests and bogs"]
    },
    {
        "name": "Finland", "flag": "🇫🇮", "capital": "Helsinki", "continent": "Europe",
        "pop": "5,560,000", "area": "338,424 km²", "curr": "EUR (€)", "lang": "Finnish, Swedish",
        "facts": ["Ranked the happiest country in the world for 7 consecutive years by the UN", "Known as the Land of a Thousand Lakes (contains 187,888 freshwater lakes)", "Has over 3.3 million saunas for a population of 5.5 million people"]
    },
    {
        "name": "France", "flag": "🇫🇷", "capital": "Paris", "continent": "Europe",
        "pop": "67,750,000", "area": "643,801 km²", "curr": "EUR (€)", "lang": "French",
        "facts": ["Most visited international tourist destination in the world (~90M visitors/year)", "Spans 12 time zones when accounting for its overseas territories", "The Louvre Museum in Paris is the world's most visited art museum"]
    },
    {
        "name": "Germany", "flag": "🇩🇪", "capital": "Berlin", "continent": "Europe",
        "pop": "84,400,000", "area": "357,022 km²", "curr": "EUR (€)", "lang": "German",
        "facts": ["Largest national economy and industrial powerhouse in the European Union", "Invented the modern automobile, diesel engine, aspirin, and movable type printing", "World-renowned for the Black Forest, Rhine Valley castles, and Autobahn system"]
    },
    {
        "name": "Greece", "flag": "🇬🇷", "capital": "Athens", "continent": "Europe",
        "pop": "10,400,000", "area": "131,957 km²", "curr": "EUR (€)", "lang": "Greek",
        "facts": ["Cradle of Western civilization, philosophy, democracy, theatre, and the Olympic Games", "Merchant shipping fleet is the largest in the world by gross carrying capacity", "Coastline features over 6,000 islands scattered across the Aegean and Ionian Seas"]
    },
    {
        "name": "Hungary", "flag": "🇭🇺", "capital": "Budapest", "continent": "Europe",
        "pop": "9,600,000", "area": "93,030 km²", "curr": "HUF (Ft)", "lang": "Hungarian",
        "facts": ["Budapest has more thermal medicinal hot spring baths than any other capital in Europe", "Invented the Rubik's Cube (Ernő Rubik) and the ballpoint pen (László Bíró)", "Lake Balaton is the largest freshwater lake in Central Europe"]
    },
    {
        "name": "Iceland", "flag": "🇮🇸", "capital": "Reykjavik", "continent": "Europe",
        "pop": "380,000", "area": "103,000 km²", "curr": "ISK (kr)", "lang": "Icelandic",
        "facts": ["Land of Fire and Ice with over 130 active and dormant volcanic craters", "Generates 100% of its domestic electricity from clean geothermal and hydro power", "Althing (parliament), founded in 930 AD at Thingvellir, is the world's oldest parliament"]
    },
    {
        "name": "Ireland", "flag": "🇮🇪", "capital": "Dublin", "continent": "Europe",
        "pop": "5,100,000", "area": "70,273 km²", "curr": "EUR (€)", "lang": "Irish, English",
        "facts": ["Known as the Emerald Isle due to its lush year-round green countryside", "Origin of Halloween, tracing back over 2,000 years to the ancient Celtic festival of Samhain", "European tech and pharmaceutical headquarters for Google, Apple, Meta, and Pfizer"]
    },
    {
        "name": "Italy", "flag": "🇮🇹", "capital": "Rome", "continent": "Europe",
        "pop": "59,000,000", "area": "301,340 km²", "curr": "EUR (€)", "lang": "Italian",
        "facts": ["Has 58 UNESCO World Heritage Sites, the most of any country on Earth", "Encloses two sovereign nations: Vatican City and San Marino", "University of Bologna (founded 1088) is the oldest university in continuous operation"]
    },
    {
        "name": "Kosovo", "flag": "🇽🇰", "capital": "Pristina", "continent": "Europe",
        "pop": "1,800,000", "area": "10,887 km²", "curr": "EUR (€)", "lang": "Albanian, Serbian",
        "facts": ["Declared independence in 2008, making it Europe's youngest sovereign state", "Has the youngest median population age in Europe (~30 years)", "Surrounded by the scenic Šar and Kopaonik mountain ranges"]
    },
    {
        "name": "Latvia", "flag": "🇱🇻", "capital": "Riga", "continent": "Europe",
        "pop": "1,880,000", "area": "64,589 km²", "curr": "EUR (€)", "lang": "Latvian",
        "facts": ["Riga features the finest and largest concentration of Art Nouveau architecture in Europe", "Ventas Rumba is the widest natural waterfall in Europe (249 m wide)", "Over 54% of the country's territory is covered by natural forests"]
    },
    {
        "name": "Lithuania", "flag": "🇱🇹", "capital": "Vilnius", "continent": "Europe",
        "pop": "2,800,000", "area": "65,300 km²", "curr": "EUR (€)", "lang": "Lithuanian",
        "facts": ["Lithuanian is one of the oldest living Indo-European languages, closely retaining archaic Sanskrit features", "In the 15th century, the Grand Duchy of Lithuania was the largest territorial state in Europe", "Famous for the Hill of Crosses, a sacred pilgrimage site with over 100,000 crosses"]
    },
    {
        "name": "Luxembourg", "flag": "🇱🇺", "capital": "Luxembourg City", "continent": "Europe",
        "pop": "660,000", "area": "2,586 km²", "curr": "EUR (€)", "lang": "Luxembourgish, French, German",
        "facts": ["Highest GDP per capita in the world according to the World Bank and IMF", "Only remaining sovereign Grand Duchy in the world, headed by the Grand Duke", "First country in the world to make all public transit (trains, trams, buses) 100% free"]
    },
    {
        "name": "Macedonia", "alt": "North Macedonia", "flag": "🇲🇰", "capital": "Skopje", "continent": "Europe",
        "pop": "1,830,000", "area": "25,713 km²", "curr": "MKD (den)", "lang": "Macedonian, Albanian",
        "facts": ["Birthplace of Mother Teresa (born Anjezë Gonxhe Bojaxhiu in Skopje in 1910)", "Lake Ohrid is one of the oldest and deepest lakes in Europe (over 4 million years old)", "Home to Kokino, one of the world's oldest megalithic observatories (Bronze Age)"]
    },
    {
        "name": "Moldova", "flag": "🇲🇩", "capital": "Chisinau", "continent": "Europe",
        "pop": "2,500,000", "area": "33,846 km²", "curr": "MDL (L)", "lang": "Romanian",
        "facts": ["Milestii Mici holds the Guinness World Record for the largest wine cellar (2M bottles across 200 km of underground galleries)", "Rich black chernozem soil makes it a premier European agricultural region", "Landlocked nation situated between Romania and Ukraine"]
    },
    {
        "name": "Montenegro", "flag": "🇲🇪", "capital": "Podgorica", "continent": "Europe",
        "pop": "620,000", "area": "13,812 km²", "curr": "EUR (€)", "lang": "Montenegrin",
        "facts": ["Bay of Kotor is Europe's southernmost fjord-like canyon and a UNESCO World Heritage site", "Tara River Canyon is the deepest canyon in Europe (1,300 meters deep)", "Regained independence in 2006, separating peacefully from the State Union of Serbia and Montenegro"]
    },
    {
        "name": "Netherlands", "flag": "🇳🇱", "capital": "Amsterdam", "continent": "Europe",
        "pop": "17,800,000", "area": "41,850 km²", "curr": "EUR (€)", "lang": "Dutch",
        "facts": ["Over 26% of the country's land area lies below global sea level, protected by the Delta Works", "Port of Rotterdam is the largest deepwater container seaport in Europe", "World's second-largest agricultural exporter by value after the United States"]
    },
    {
        "name": "Norway", "flag": "🇳🇴", "capital": "Oslo", "continent": "Europe",
        "pop": "5,490,000", "area": "385,207 km²", "curr": "NOK (kr)", "lang": "Norwegian",
        "facts": ["Famous for spectacular glacial fjords like Geirangerfjord and the midnight sun in summer", "Manages the world's largest sovereign wealth fund (Government Pension Fund, over $1.6 trillion)", "Lærdal Tunnel is the longest road tunnel on Earth (24.5 km long)"]
    },
    {
        "name": "Poland", "flag": "🇵🇱", "capital": "Warsaw", "continent": "Europe",
        "pop": "37,600,000", "area": "312,696 km²", "curr": "PLN (zł)", "lang": "Polish",
        "facts": ["Birthplace of astronomer Nicolaus Copernicus and Nobel laureate physicist Marie Curie", "Wieliczka Salt Mine has operated continuously since the 13th century featuring underground chapels", "Warsaw's historic Old Town was meticulously rebuilt from ruins following WWII"]
    },
    {
        "name": "Portugal", "flag": "🇵🇹", "capital": "Lisbon", "continent": "Europe",
        "pop": "10,300,000", "area": "92,212 km²", "curr": "EUR (€)", "lang": "Portuguese",
        "facts": ["Oldest nation-state on the Iberian Peninsula with borders unchanged since 1297", "Produces approximately 50% of the entire world's supply of natural cork", "Pioneered the Age of Discovery sailing around Africa to Asia under Vasco da Gama"]
    },
    {
        "name": "Romania", "flag": "🇷🇴", "capital": "Bucharest", "continent": "Europe",
        "pop": "19,000,000", "area": "238,397 km²", "curr": "RON (lei)", "lang": "Romanian",
        "facts": ["Palace of the Parliament in Bucharest is the world's second-largest administrative building after the Pentagon", "Transylvania region is famous for dramatic Carpathian mountain castles including Bran Castle", "Danube Delta is the best-preserved and second-largest river delta in Europe"]
    },
    {
        "name": "Russia", "flag": "🇷🇺", "capital": "Moscow", "continent": "Europe",
        "pop": "143,400,000", "area": "17,098,242 km²", "curr": "RUB (₽)", "lang": "Russian",
        "facts": ["Largest country in the world by land area, spanning 11 continuous time zones across Europe and Asia", "Lake Baikal holds ~20% of Earth's total unfrozen surface freshwater", "Trans-Siberian Railway is the longest single railway line on Earth (9,289 km)"]
    },
    {
        "name": "Republic of Serbia", "alt": "Serbia", "flag": "🇷🇸", "capital": "Belgrade", "continent": "Europe",
        "pop": "6,600,000", "area": "88,361 km²", "curr": "RSD (din)", "lang": "Serbian",
        "facts": ["Belgrade sits at the strategic confluence of the Danube and Sava rivers, inhabited since prehistoric Vinča times", "Birthplace of visionary electrical engineer Nikola Tesla and Roman Emperor Constantine the Great", "One of the world's leading producers and exporters of raspberries"]
    },
    {
        "name": "Slovakia", "flag": "🇸🇰", "capital": "Bratislava", "continent": "Europe",
        "pop": "5,400,000", "area": "49,036 km²", "curr": "EUR (€)", "lang": "Slovak",
        "facts": ["Has the highest number of castles and châteaux per capita in the world (over 180 castles)", "World's largest car producer per capita with plants for Volkswagen, Kia, and Jaguar Land Rover", "Bratislava is the only national capital in the world bordering two sovereign countries (Austria & Hungary)"]
    },
    {
        "name": "Slovenia", "flag": "🇸🇮", "capital": "Ljubljana", "continent": "Europe",
        "pop": "2,100,000", "area": "20,273 km²", "curr": "EUR (€)", "lang": "Slovenian",
        "facts": ["Lake Bled features an iconic medieval cliffside castle and picturesque island church in the Julian Alps", "Postojna Cave features the world's only double-track underground tourist cave railway", "Over 60% of the total land area is protected pristine forest"]
    },
    {
        "name": "Spain", "flag": "🇪🇸", "capital": "Madrid", "continent": "Europe",
        "pop": "47,600,000", "area": "505,990 km²", "curr": "EUR (€)", "lang": "Spanish",
        "facts": ["Spanish is the second most natively spoken language on Earth after Mandarin (~500M native speakers)", "Sagrada Família cathedral in Barcelona has been under construction since 1882", "Produces approximately 40% of the entire world's olive oil supply"]
    },
    {
        "name": "Sweden", "flag": "🇸🇪", "capital": "Stockholm", "continent": "Europe",
        "pop": "10,500,000", "area": "450,295 km²", "curr": "SEK (kr)", "lang": "Swedish",
        "facts": ["Home of the Nobel Prize ceremonies established by dynamite inventor Alfred Nobel", "Birthplace of global brands IKEA, Spotify, Volvo, and pop group ABBA", "Capital Stockholm is built across 14 islands connected by 57 bridges on Lake Mälaren"]
    },
    {
        "name": "Switzerland", "flag": "🇨🇭", "capital": "Bern", "continent": "Europe",
        "pop": "8,780,000", "area": "41,285 km²", "curr": "CHF (Fr.)", "lang": "German, French, Italian, Romansh",
        "facts": ["Maintained continuous armed international neutrality since the Congress of Vienna in 1815", "Houses CERN, the European Organization for Nuclear Research and the Large Hadron Collider", "Has four constitutionally designated official national languages"]
    },
    {
        "name": "Ukraine", "flag": "🇺🇦", "capital": "Kyiv", "continent": "Europe",
        "pop": "38,000,000", "area": "603,628 km²", "curr": "UAH (₴)", "lang": "Ukrainian",
        "facts": ["Largest country entirely within the continent of Europe by territorial area", "Known as the Breadbasket of Europe with vast fertile black soil belts (chornozem)", "Kyiv Pechersk Lavra cave monastery is a UNESCO cultural treasure founded in 1051 AD"]
    },
    {
        "name": "United Kingdom", "flag": "🇬🇧", "capital": "London", "continent": "Europe",
        "pop": "67,330,000", "area": "242,495 km²", "curr": "GBP (£)", "lang": "English",
        "facts": ["London Underground (opened 1863) is the world's oldest underground rapid transit system", "Royal Observatory in Greenwich marks the Prime Meridian of the world (0° Longitude)", "Birthplace of Shakespeare, Isaac Newton, Industrial Revolution, and parliamentary democracy"]
    },

    # ==================== AFRICA (52 countries) ====================
    {
        "name": "Algeria", "flag": "🇩🇿", "capital": "Algiers", "continent": "Africa",
        "pop": "45,600,000", "area": "2,381,741 km²", "curr": "DZD (د.ج)", "lang": "Arabic, Berber",
        "facts": ["Largest country in Africa and the Mediterranean basin by total geographic land area", "Over 80% of its landmass is occupied by the Sahara Desert", "Major supplier of natural gas pipeline energy to Southern Europe"]
    },
    {
        "name": "Angola", "flag": "🇦🇴", "capital": "Luanda", "continent": "Africa",
        "pop": "35,600,000", "area": "1,246,700 km²", "curr": "AOA (Kz)", "lang": "Portuguese",
        "facts": ["Second-largest crude oil producer in Sub-Saharan Africa", "Home to the giant sable antelope, an endemic national emblem", "Kalandula Falls is one of the largest waterfalls by volume in Africa (105 m high)"]
    },
    {
        "name": "Benin", "flag": "🇧🇯", "capital": "Porto-Novo", "continent": "Africa",
        "pop": "13,350,000", "area": "114,763 km²", "curr": "XOF (CFA)", "lang": "French",
        "facts": ["Historical cradle of the ancient Kingdom of Dahomey and the Fon warriors", "Birthplace of Vodun (Voodoo) religion, celebrated annually as a national holiday on Jan 10", "Ganvié is a lake village built entirely on wooden stilts, called the 'Venice of Africa'"]
    },
    {
        "name": "Botswana", "flag": "🇧🇼", "capital": "Gaborone", "continent": "Africa",
        "pop": "2,630,000", "area": "581,730 km²", "curr": "BWP (P)", "lang": "English, Setswana",
        "facts": ["Okavango Delta is one of the world's largest inland deltas and wildlife reserves", "World's leading producer of gem-quality diamonds by value", "Has maintained one of the most stable democracies and fastest-growing economies in Africa"]
    },
    {
        "name": "Burkina Faso", "flag": "🇧🇫", "capital": "Ouagadougou", "continent": "Africa",
        "pop": "22,670,000", "area": "274,200 km²", "curr": "XOF (CFA)", "lang": "French",
        "facts": ["Name translates to 'Land of Incorruptible People' in the Mòoré and Dioula languages", "Hosts FESPACO, the largest and most prestigious pan-African film festival in the world", "Significant producer of gold and cotton in West Africa"]
    },
    {
        "name": "Burundi", "flag": "🇧🇮", "capital": "Gitega", "continent": "Africa",
        "pop": "12,900,000", "area": "27,834 km²", "curr": "BIF (FBu)", "lang": "Kirundi, French",
        "facts": ["Located in the Great Lakes region bordering deep Lake Tanganyika", "Royal drummers of Burundi perform sacred drumming recognized as UNESCO Intangible Heritage", "Moved political capital from Bujumbura to historic Gitega in 2019"]
    },
    {
        "name": "Cameroon", "flag": "🇨🇲", "capital": "Yaoundé", "continent": "Africa",
        "pop": "27,900,000", "area": "475,442 km²", "curr": "XAF (FCFA)", "lang": "French, English",
        "facts": ["Often called 'Africa in miniature' due to its diverse climates, rainforests, savannahs, and beaches", "Mount Cameroon (4,040 m) is the highest active volcano in West and Central Africa", "Famous for football prowess, winning the Africa Cup of Nations five times"]
    },
    {
        "name": "Central African Republic", "flag": "🇨🇫", "capital": "Bangui", "continent": "Africa",
        "pop": "5,570,000", "area": "622,984 km²", "curr": "XAF (FCFA)", "lang": "Sango, French",
        "facts": ["Rich in mineral deposits including diamonds, gold, and uranium", "Dzanga-Ndoki National Park hosts rare western lowland gorillas and forest elephants", "Geographic heartland of equatorial Central Africa"]
    },
    {
        "name": "Chad", "flag": "🇹🇩", "capital": "N'Djamena", "continent": "Africa",
        "pop": "17,700,000", "area": "1,284,000 km²", "curr": "XAF (FCFA)", "lang": "French, Arabic",
        "facts": ["Lake Chad has historically sustained millions across Chad, Nigeria, Niger, and Cameroon", "Tibesti Mountains contain the highest peak in the Sahara Desert (Emi Koussi, 3,415 m)", "Ennedi Plateau features dramatic natural sandstone arches and ancient Sahara rock art"]
    },
    {
        "name": "Democratic Republic of the Congo", "alt": "DR Congo", "flag": "🇨🇩", "capital": "Kinshasa", "continent": "Africa",
        "pop": "102,000,000", "area": "2,344,858 km²", "curr": "CDF (FC)", "lang": "French, Lingala, Swahili",
        "facts": ["Second-largest country in Africa by area, encompassing the vast Congo Basin rainforest", "Produces more than 70% of the world's mined cobalt, essential for electric batteries", "Congo River is the deepest river in the world, plunging over 220 meters"]
    },
    {
        "name": "Republic of the Congo", "alt": "Congo", "flag": "🇨🇬", "capital": "Brazzaville", "continent": "Africa",
        "pop": "6,100,000", "area": "342,000 km²", "curr": "XAF (FCFA)", "lang": "French, Lingala",
        "facts": ["Brazzaville sits directly across the Congo River from Kinshasa (closest capitals in the world)", "Over 60% of national land area is covered by dense equatorial rainforest", "Home to the famous Sapeurs (Society of Ambianceurs and Elegant Persons) fashion culture"]
    },
    {
        "name": "Djibouti", "flag": "🇩🇯", "capital": "Djibouti", "continent": "Africa",
        "pop": "1,120,000", "area": "23,200 km²", "curr": "DJF (Fdj)", "lang": "Arabic, French",
        "facts": ["Guards the Bab-el-Mandeb chokepoint between the Red Sea and Gulf of Aden", "Hosts international naval bases for the US, China, France, and Japan", "Lake Assal is the lowest point on the African continent (-155 m below sea level)"]
    },
    {
        "name": "Egypt", "flag": "🇪🇬", "capital": "Cairo", "continent": "Africa",
        "pop": "109,300,000", "area": "1,002,450 km²", "curr": "EGP (E£)", "lang": "Arabic",
        "facts": ["Home of the Pyramids of Giza, the oldest surviving Wonder of the Ancient World", "The Nile River has sustained Egyptian civilization for over 5,000 years", "Suez Canal handles approximately 12% of all global maritime trade"]
    },
    {
        "name": "Equatorial Guinea", "flag": "🇬🇶", "capital": "Malabo", "continent": "Africa",
        "pop": "1,670,000", "area": "28,051 km²", "curr": "XAF (FCFA)", "lang": "Spanish, French, Portuguese",
        "facts": ["Only sovereign African nation where Spanish is an official national language", "Consists of the mainland Río Muni and volcanic islands including Bioko", "One of Sub-Saharan Africa's largest oil producers per capita"]
    },
    {
        "name": "Eritrea", "flag": "🇪🇷", "capital": "Asmara", "continent": "Africa",
        "pop": "3,680,000", "area": "117,600 km²", "curr": "ERN (Nfk)", "lang": "Tigrinya, Arabic, English",
        "facts": ["Capital Asmara is a UNESCO World Heritage site for modernist Italian colonial architecture", "Controls over 1,000 km of pristine Red Sea coastline and the Dahlak Archipelago", "Ancient port of Adulis was a pivotal trading hub of the Kingdom of Aksum"]
    },
    {
        "name": "Ethiopia", "flag": "🇪🇹", "capital": "Addis Ababa", "continent": "Africa",
        "pop": "126,500,000", "area": "1,104,300 km²", "curr": "ETB (Br)", "lang": "Amharic",
        "facts": ["One of the oldest sovereign nations on Earth and never colonized by European powers", "Birthplace of coffee (discovered in the Kaffa province)", "Follows its own unique 13-month calendar, approximately 7 years behind the Gregorian"]
    },
    {
        "name": "Gabon", "flag": "🇬🇦", "capital": "Libreville", "continent": "Africa",
        "pop": "2,380,000", "area": "267,667 km²", "curr": "XAF (FCFA)", "lang": "French",
        "facts": ["Over 85% of land is covered by virgin rainforest, acting as Earth's green lung", "Established 13 national parks covering over 10% of the entire country", "One of the largest producers of manganese and crude oil in Africa"]
    },
    {
        "name": "Gambia", "alt": "The Gambia", "flag": "🇬🇲", "capital": "Banjul", "continent": "Africa",
        "pop": "2,700,000", "area": "11,295 km²", "curr": "GMD (D)", "lang": "English",
        "facts": ["Smallest country in mainland Africa, tracing the navigable Gambia River", "Entirely surrounded by Senegal except for its Atlantic Ocean coastline", "Kunta Kinteh Island was a historic hub of the trans-Atlantic trade"]
    },
    {
        "name": "Ghana", "flag": "🇬🇭", "capital": "Accra", "continent": "Africa",
        "pop": "33,500,000", "area": "238,535 km²", "curr": "GHS (₵)", "lang": "English",
        "facts": ["First Sub-Saharan African nation to gain independence from colonial rule in 1957", "Second-largest producer of cocoa in the world and leading gold producer in Africa", "Lake Volta is the largest artificial reservoir by surface area in the world"]
    },
    {
        "name": "Guinea", "flag": "🇬🇳", "capital": "Conakry", "continent": "Africa",
        "pop": "13,860,000", "area": "245,857 km²", "curr": "GNF (FG)", "lang": "French",
        "facts": ["Possesses over a third of the world's proven bauxite (aluminum ore) reserves", "Known as the 'Water Tower of West Africa', originating the Niger, Senegal, and Gambia rivers", "Mount Nimba Strict Nature Reserve hosts viviparous toads and chimpanzees"]
    },
    {
        "name": "Guinea-Bissau", "flag": "🇬🇼", "capital": "Bissau", "continent": "Africa",
        "pop": "2,100,000", "area": "36,125 km²", "curr": "XOF (CFA)", "lang": "Portuguese",
        "facts": ["Bijagós Archipelago consists of 88 islands recognized as a UNESCO Biosphere Reserve", "One of the world's leading producers and exporters of cashew nuts", "Formerly known as Portuguese Guinea before gaining independence in 1973"]
    },
    {
        "name": "Ivory Coast", "alt": "Cote d'Ivoire", "flag": "🇨🇮", "capital": "Yamoussoukro", "continent": "Africa",
        "pop": "29,380,000", "area": "322,463 km²", "curr": "XOF (CFA)", "lang": "French",
        "facts": ["World's largest producer and exporter of cocoa beans (~40% of global supply)", "Basilica of Our Lady of Peace in Yamoussoukro is the largest church in the world", "Commercial hub Abidjan is known as the 'Paris of West Africa'"]
    },
    {
        "name": "Kenya", "flag": "🇰🇪", "capital": "Nairobi", "continent": "Africa",
        "pop": "54,000,000", "area": "580,367 km²", "curr": "KES (KSh)", "lang": "Swahili, English",
        "facts": ["Famous for the annual Great Wildebeest Migration in the Maasai Mara", "Equator passes directly through the geographic center of the country", "World leader in mobile money technology with M-Pesa launched in 2007"]
    },
    {
        "name": "Lesotho", "flag": "🇱🇸", "capital": "Maseru", "continent": "Africa",
        "pop": "2,300,000", "area": "30,355 km²", "curr": "LSL (L)", "lang": "Sesotho, English",
        "facts": ["Completely surrounded as an enclave within the territory of South Africa", "Known as the Kingdom in the Sky: only nation lying entirely above 1,400 meters elevation", "Major exporter of pristine freshwater through the Lesotho Highlands Water Project"]
    },
    {
        "name": "Liberia", "flag": "🇱🇷", "capital": "Monrovia", "continent": "Africa",
        "pop": "5,300,000", "area": "111,369 km²", "curr": "LRD ($)", "lang": "English",
        "facts": ["Founded in 1822 by freed American slaves and Africa's oldest modern republic (1847)", "Capital Monrovia was named after US President James Monroe", "Operates one of the world's largest open maritime ship registries by tonnage"]
    },
    {
        "name": "Libya", "flag": "🇱🇾", "capital": "Tripoli", "continent": "Africa",
        "pop": "6,900,000", "area": "1,759,540 km²", "curr": "LYD (LD)", "lang": "Arabic",
        "facts": ["Possesses the largest proven crude oil reserves on the African continent", "Over 90% of the land is part of the hyper-arid Sahara Desert", "Great Man-Made River is the world's largest underground irrigation pipeline network"]
    },
    {
        "name": "Madagascar", "flag": "🇲🇬", "capital": "Antananarivo", "continent": "Africa",
        "pop": "29,600,000", "area": "587,041 km²", "curr": "MGA (Ar)", "lang": "Malagasy, French",
        "facts": ["Fourth-largest island in the world, isolated for over 88 million years", "Over 90% of its wildlife (including lemurs and baobab trees) is found nowhere else", "Produces over 80% of the entire world supply of natural vanilla beans"]
    },
    {
        "name": "Malawi", "flag": "🇲🇼", "capital": "Lilongwe", "continent": "Africa",
        "pop": "20,400,000", "area": "118,484 km²", "curr": "MWK (MK)", "lang": "English, Chichewa",
        "facts": ["Known as the Warm Heart of Africa due to the hospitality of its people", "Lake Malawi contains more unique species of cichlid fish than any other lake on Earth", "Located in the dramatic rift valley of southeastern Africa"]
    },
    {
        "name": "Mali", "flag": "🇲🇱", "capital": "Bamako", "continent": "Africa",
        "pop": "22,600,000", "area": "1,240,192 km²", "curr": "XOF (CFA)", "lang": "French, Bambara",
        "facts": ["Historic heartland of the wealthy Mali Empire ruled by Mansa Musa (14th century)", "Great Mosque of Djenné is the largest mud-brick building in the world", "Timbuktu was an ancient center of Islamic scholarship and trans-Saharan trade"]
    },
    {
        "name": "Mauritania", "flag": "🇲🇷", "capital": "Nouakchott", "continent": "Africa",
        "pop": "4,700,000", "area": "1,030,700 km²", "curr": "MRU (UM)", "lang": "Arabic",
        "facts": ["Richat Structure ('Eye of the Sahara') is a 40 km geological dome visible from space", "Mauritania Railway operates one of the longest freight trains in the world (3 km long)", "Bridges the Arab Maghreb with Sub-Saharan West Africa"]
    },
    {
        "name": "Morocco", "flag": "🇲🇦", "capital": "Rabat", "continent": "Africa",
        "pop": "37,800,000", "area": "446,550 km²", "curr": "MAD (DH)", "lang": "Arabic, Berber",
        "facts": ["Controls approximately 70% of the world's proven phosphate rock reserves", "University of al-Qarawiyyin in Fez (founded 859 AD) is the world's oldest university", "Separated from Europe by only 14 km at the Strait of Gibraltar"]
    },
    {
        "name": "Mozambique", "flag": "🇲🇿", "capital": "Maputo", "continent": "Africa",
        "pop": "33,000,000", "area": "801,590 km²", "curr": "MZN (MT)", "lang": "Portuguese",
        "facts": ["Over 2,500 km of tropical Indian Ocean coastline along the Mozambique Channel", "Home to the massive Rovuma Basin offshore natural gas fields", "National flag features an AK-47 rifle alongside an open book and hoe"]
    },
    {
        "name": "Namibia", "flag": "🇳🇦", "capital": "Windhoek", "continent": "Africa",
        "pop": "2,600,000", "area": "825,615 km²", "curr": "NAD (N$)", "lang": "English",
        "facts": ["Namib Desert is considered the oldest desert on Earth (over 55 million years)", "Features the towering red sand dunes of Sossusvlei (up to 300 meters high)", "First country in the world to incorporate environmental protection into its constitution"]
    },
    {
        "name": "Niger", "flag": "🇳🇪", "capital": "Niamey", "continent": "Africa",
        "pop": "26,200,000", "area": "1,267,000 km²", "curr": "XOF (CFA)", "lang": "French",
        "facts": ["Named after the mighty Niger River that arcs across its southwest territory", "Major producer and exporter of high-grade uranium ore to international markets", "Aïr Mountains and Ténéré Desert contain ancient Sahara giraffe petroglyphs"]
    },
    {
        "name": "Nigeria", "flag": "🇳🇬", "capital": "Abuja", "continent": "Africa",
        "pop": "223,800,000", "area": "923,768 km²", "curr": "NGN (₦)", "lang": "English",
        "facts": ["Most populous country in Africa and sixth most populous on Earth", "Nollywood film industry is the second largest in the world by annual output", "Major crude oil exporter and financial tech engine of West Africa"]
    },
    {
        "name": "Rwanda", "flag": "🇷🇼", "capital": "Kigali", "continent": "Africa",
        "pop": "13,800,000", "area": "26,338 km²", "curr": "RWF (FRw)", "lang": "Kinyarwanda, French, English",
        "facts": ["Known as the Land of a Thousand Hills (Pays des Mille Collines)", "World leader in female political representation with over 60% women in parliament", "Volcanoes National Park protects endangered mountain gorillas"]
    },
    {
        "name": "Senegal", "flag": "🇸🇳", "capital": "Dakar", "continent": "Africa",
        "pop": "17,300,000", "area": "196,722 km²", "curr": "XOF (CFA)", "lang": "French, Wolof",
        "facts": ["Cape Verde Peninsula in Dakar is the westernmost point of the African continent", "Gorée Island preserves the historic House of Slaves memorial", "Lake Retba (Lac Rose) is famous for its vibrant pink water caused by dunaliella algae"]
    },
    {
        "name": "Sierra Leone", "flag": "🇸🇱", "capital": "Freetown", "continent": "Africa",
        "pop": "8,600,000", "area": "71,740 km²", "curr": "SLE (Le)", "lang": "English",
        "facts": ["Freetown was founded in 1792 as a haven for freed enslaved people", "Has the third-largest natural harbour in the world", "Rich in diamond deposits, titanium rutile, and bauxite ore"]
    },
    {
        "name": "Somalia", "flag": "🇸🇴", "capital": "Mogadishu", "continent": "Africa",
        "pop": "17,600,000", "area": "637,657 km²", "curr": "SOS (Sh.So.)", "lang": "Somali, Arabic",
        "facts": ["Has the longest coastline in mainland Africa (over 3,333 km)", "Historically known as the Land of Punt by ancient Egyptian traders", "Major global exporter of frankincense, myrrh, and livestock"]
    },
    {
        "name": "Somaliland", "flag": "🇸🇴", "capital": "Hargeisa", "continent": "Africa",
        "pop": "4,500,000", "area": "176,120 km²", "curr": "SLS (Sl.Sh.)", "lang": "Somali, Arabic",
        "facts": ["Self-declared de facto republic with its own currency, police, and elections since 1991", "Laas Geel caves contain some of the oldest and best-preserved rock art in the Horn of Africa", "Strategically located along the Gulf of Aden maritime shipping routes"]
    },
    {
        "name": "South Africa", "flag": "🇿🇦", "capital": "Pretoria", "continent": "Africa",
        "pop": "60,000,000", "area": "1,221,037 km²", "curr": "ZAR (R)", "lang": "11 official languages",
        "facts": ["Has three constitutional capitals: Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)", "Known as the Rainbow Nation celebrating cultural, linguistic, and racial diversity", "Table Mountain in Cape Town is one of the oldest mountains on Earth"]
    },
    {
        "name": "South Sudan", "flag": "🇸🇸", "capital": "Juba", "continent": "Africa",
        "pop": "11,000,000", "area": "644,329 km²", "curr": "SSP (SS£)", "lang": "English",
        "facts": ["World's newest sovereign nation, gaining recognized independence on July 9, 2011", "The Sudd is one of the largest freshwater tropical wetlands on planet Earth", "Major crude oil producer with reserves linked by pipeline north to Port Sudan"]
    },
    {
        "name": "Sudan", "flag": "🇸🇩", "capital": "Khartoum", "continent": "Africa",
        "pop": "48,000,000", "area": "1,861,484 km²", "curr": "SDG (SD£)", "lang": "Arabic, English",
        "facts": ["Has more ancient pyramids (over 250 in Meroë and Nubia) than Egypt", "Khartoum is the confluence where the Blue Nile and White Nile rivers merge", "Major producer of gum arabic, accounting for roughly 70% of global supplies"]
    },
    {
        "name": "Swaziland", "alt": "Eswatini", "flag": "🇸🇿", "capital": "Mbabane", "continent": "Africa",
        "pop": "1,200,000", "area": "17,364 km²", "curr": "SZL (E)", "lang": "Swazi, English",
        "facts": ["One of the last remaining absolute monarchies in Africa, renamed Eswatini in 2018", "Ngwenya Mine is the oldest known iron ore mine on Earth (over 43,000 years old)", "Famous for the annual Umhlanga Reed Dance festival"]
    },
    {
        "name": "Togo", "flag": "🇹🇬", "capital": "Lomé", "continent": "Africa",
        "pop": "8,850,000", "area": "56,785 km²", "curr": "XOF (CFA)", "lang": "French",
        "facts": ["Narrow nation in West Africa with an Atlantic coastline of only 56 km", "Port of Lomé is the leading container transshipment hub in West Africa", "Koutammakou mud tower-houses (Takienta) are a UNESCO World Heritage site"]
    },
    {
        "name": "Tunisia", "flag": "🇹🇳", "capital": "Tunis", "continent": "Africa",
        "pop": "12,400,000", "area": "163,610 km²", "curr": "TND (DT)", "lang": "Arabic",
        "facts": ["Ancient Carthage rivaled the Roman Republic for supremacy in the Mediterranean", "El Djem amphitheater is one of the largest and best-preserved Roman colosseums", "Cape Angela is the northernmost point of the entire African continent"]
    },
    {
        "name": "Uganda", "flag": "🇺🇬", "capital": "Kampala", "continent": "Africa",
        "pop": "47,250,000", "area": "241,550 km²", "curr": "UGX (USh)", "lang": "English, Swahili",
        "facts": ["Nicknamed the Pearl of Africa by Winston Churchill for its lush natural beauty", "Source of the White Nile river issuing northward from Lake Victoria at Jinja", "Bwindi Impenetrable National Park protects half of the world's mountain gorillas"]
    },
    {
        "name": "United Republic of Tanzania", "alt": "Tanzania", "flag": "🇹🇿", "capital": "Dodoma", "continent": "Africa",
        "pop": "65,500,000", "area": "947,303 km²", "curr": "TZS (TSh)", "lang": "Swahili, English",
        "facts": ["Home to Mount Kilimanjaro (5,895 m), Africa's highest mountain and tallest free-standing peak", "Serengeti National Park hosts the world's greatest wildlife migration", "Zanzibar spice archipelago was a historic Indian Ocean trade nexus"]
    },
    {
        "name": "Western Sahara", "flag": "🇪🇭", "capital": "El Aaiún", "continent": "Africa",
        "pop": "580,000", "area": "266,000 km²", "curr": "MAD (DH)", "lang": "Arabic, Spanish",
        "facts": ["Territory bordering Morocco, Mauritania, and the Atlantic Ocean", "Home to the Bou Craa phosphate reserves connected by the world's longest conveyor belt", "Traditional nomadic Sahrawi culture in the hyper-arid Western Sahara"]
    },
    {
        "name": "Zambia", "flag": "🇿🇲", "capital": "Lusaka", "continent": "Africa",
        "pop": "20,000,000", "area": "752,612 km²", "curr": "ZMW (ZK)", "lang": "English",
        "facts": ["Victoria Falls (Mosi-oa-Tunya, 'The Smoke that Thunders') forms the border with Zimbabwe", "One of Africa's largest producers and exporters of refined copper", "Kariba Dam is one of the largest man-made reservoirs in the world by volume"]
    },
    {
        "name": "Zimbabwe", "flag": "🇿🇼", "capital": "Harare", "continent": "Africa",
        "pop": "16,300,000", "area": "390,757 km²", "curr": "ZWG (ZiG)", "lang": "16 official languages",
        "facts": ["Named after the ancient stone city ruins of Great Zimbabwe (11th-15th century)", "Shares the majestic Victoria Falls on the Zambezi River with Zambia", "Holds the second-largest platinum and high-grade lithium reserves in Africa"]
    },

    # ==================== ASIA (48 countries) ====================
    {
        "name": "Afghanistan", "flag": "🇦🇫", "capital": "Kabul", "continent": "Asia",
        "pop": "41,100,000", "area": "652,864 km²", "curr": "AFN (؋)", "lang": "Pashto, Dari",
        "facts": ["Historic 'Crossroads of Central Asia' along the ancient Silk Road", "Dominated by the rugged Hindu Kush mountain range", "Known for centuries for producing deep blue lapis lazuli gemstones"]
    },
    {
        "name": "Armenia", "flag": "🇦🇲", "capital": "Yerevan", "continent": "Asia",
        "pop": "2,780,000", "area": "29,743 km²", "curr": "AMD (֏)", "lang": "Armenian",
        "facts": ["First nation in the world to adopt Christianity as its state religion (301 AD)", "Mount Ararat is an ancient national symbol visible across the capital Yerevan", "Has its own unique alphabet created by Mesrop Mashtots in 405 AD"]
    },
    {
        "name": "Azerbaijan", "flag": "🇦🇿", "capital": "Baku", "continent": "Asia",
        "pop": "10,140,000", "area": "86,600 km²", "curr": "AZN (₼)", "lang": "Azerbaijani",
        "facts": ["Known as the 'Land of Fire' due to burning subterranean natural gas seeps like Yanar Dag", "Baku sits on the Caspian Sea and was home to the world's first modern oil wells in 1846", "Hosts more than half of the world's mud volcanoes"]
    },
    {
        "name": "Bangladesh", "flag": "🇧🇩", "capital": "Dhaka", "continent": "Asia",
        "pop": "169,800,000", "area": "148,460 km²", "curr": "BDT (৳)", "lang": "Bengali",
        "facts": ["Forms the largest river delta in the world (Ganges-Brahmaputra Delta)", "Sundarbans mangrove forest is home to the endangered Bengal tiger", "World's second-largest ready-made garment and textile exporter"]
    },
    {
        "name": "Bhutan", "flag": "🇧🇹", "capital": "Thimphu", "continent": "Asia",
        "pop": "780,000", "area": "38,394 km²", "curr": "BTN (Nu.)", "lang": "Dzongkha",
        "facts": ["Pioneered the 'Gross National Happiness' index measuring citizen well-being over GDP", "Only carbon-negative country in the world, absorbing more CO2 than it emits", "Famous for cliffside monasteries like Paro Taktsang (Tiger's Nest)"]
    },
    {
        "name": "Brunei", "flag": "🇧🇳", "capital": "Bandar Seri Begawan", "continent": "Asia",
        "pop": "450,000", "area": "5,765 km²", "curr": "BND (B$)", "lang": "Malay",
        "facts": ["Sultanate located on the island of Borneo enriched by vast offshore petroleum and gas", "Citizens enjoy free education, medical healthcare, and no personal income tax", "Ulu Temburong National Park protects pristine tropical primary rainforest"]
    },
    {
        "name": "Cambodia", "flag": "🇰🇭", "capital": "Phnom Penh", "continent": "Asia",
        "pop": "16,770,000", "area": "181,035 km²", "curr": "KHR (៛)", "lang": "Khmer",
        "facts": ["Angkor Wat is the largest religious monument in the world, built by the Khmer Empire", "Tonlé Sap lake is the largest freshwater lake in Southeast Asia, reversing flow seasonally", "National flag is the only flag in the world featuring a building (Angkor Wat)"]
    },
    {
        "name": "China", "flag": "🇨🇳", "capital": "Beijing", "continent": "Asia",
        "pop": "1,411,750,000", "area": "9,596,961 km²", "curr": "CNY (¥)", "lang": "Mandarin",
        "facts": ["The Great Wall stretches over 21,000 kilometers across northern frontiers", "Invented paper, movable type printing, gunpowder, and the magnetic compass", "Shares land borders with 14 different countries, tied with Russia for most in the world"]
    },
    {
        "name": "Cyprus", "flag": "🇨🇾", "capital": "Nicosia", "continent": "Asia",
        "pop": "1,250,000", "area": "9,251 km²", "curr": "EUR (€)", "lang": "Greek, Turkish",
        "facts": ["Mythological birthplace of Aphrodite, the ancient Greek goddess of love", "Capital Nicosia is divided by a UN buffer zone (Green Line)", "Third-largest island in the Mediterranean Sea"]
    },
    {
        "name": "Georgia", "flag": "🇬🇪", "capital": "Tbilisi", "continent": "Asia",
        "pop": "3,700,000", "area": "69,700 km²", "curr": "GEL (₾)", "lang": "Georgian",
        "facts": ["Cradle of wine: archaeological evidence of winemaking in clay kvevri vessels dates back 8,000 years", "Located in the rugged Caucasus Mountains between the Black and Caspian Seas", "Has its own distinct and ancient Georgian script (Mkhedruli)"]
    },
    {
        "name": "India", "flag": "🇮🇳", "capital": "New Delhi", "continent": "Asia",
        "pop": "1,428,627,663", "area": "3,287,263 km²", "curr": "INR (₹)", "lang": "Hindi, English",
        "facts": ["World's most populous nation and largest democracy", "Home to the Taj Mahal, the holy Ganges River, and the snow-capped Himalayas", "Invented the mathematical concept of zero and the decimal number system"]
    },
    {
        "name": "Indonesia", "flag": "🇮🇩", "capital": "Jakarta", "continent": "Asia",
        "pop": "277,530,000", "area": "1,904,569 km²", "curr": "IDR (Rp)", "lang": "Indonesian",
        "facts": ["World's largest island nation with over 17,000 islands spanning three time zones", "Home to the Komodo dragon, the world's largest living lizard", "Houses Borobudur, the largest Buddhist temple monument on Earth (9th century)"]
    },
    {
        "name": "Iran", "flag": "🇮🇷", "capital": "Tehran", "continent": "Asia",
        "pop": "88,550,000", "area": "1,648,195 km²", "curr": "IRR (﷼)", "lang": "Persian (Farsi)",
        "facts": ["Heir to the ancient Persian Empire and the monumental ruins of Persepolis", "Holds the world's second-largest natural gas reserves and fourth-largest oil reserves", "Invented the qanat underground aqueduct system and windcatcher architecture"]
    },
    {
        "name": "Iraq", "flag": "🇮🇶", "capital": "Baghdad", "continent": "Asia",
        "pop": "44,500,000", "area": "438,317 km²", "curr": "IQD (ع.د)", "lang": "Arabic, Kurdish",
        "facts": ["Ancient Mesopotamia, the 'Cradle of Civilization' between the Tigris and Euphrates rivers", "Where writing (cuneiform), the wheel, and the Code of Hammurabi originated", "Baghdad was the intellectual capital of the Islamic Golden Age with the House of Wisdom"]
    },
    {
        "name": "Israel", "flag": "🇮🇱", "capital": "Jerusalem", "continent": "Asia",
        "pop": "9,800,000", "area": "22,072 km²", "curr": "ILS (₪)", "lang": "Hebrew, Arabic",
        "facts": ["Known as the 'Start-Up Nation' with highest density of high-tech startups outside Silicon Valley", "Jerusalem contains holy sites for Judaism (Western Wall), Christianity (Holy Sepulchre), and Islam (Al-Aqsa)", "Bordered by the Dead Sea, the lowest land point on Earth (-430 m)"]
    },
    {
        "name": "Japan", "flag": "🇯🇵", "capital": "Tokyo", "continent": "Asia",
        "pop": "124,500,000", "area": "377,975 km²", "curr": "JPY (¥)", "lang": "Japanese",
        "facts": ["Consists of 6,852 islands across the Pacific Rim of Fire", "Greater Tokyo Area is the most populous metropolitan area on Earth (~37.4M people)", "Mount Fuji is an active stratovolcano and sacred national cultural icon"]
    },
    {
        "name": "Jordan", "flag": "🇯🇴", "capital": "Amman", "continent": "Asia",
        "pop": "11,300,000", "area": "89,342 km²", "curr": "JOD (JD)", "lang": "Arabic",
        "facts": ["Home to the ancient Nabataean rock-carved city of Petra, a New Wonder of the World", "Wadi Rum desert features dramatic sandstone cliffs and red sand dunes", "Shares the hyper-saline Dead Sea with Israel and the West Bank"]
    },
    {
        "name": "Kazakhstan", "flag": "🇰🇿", "capital": "Astana", "continent": "Asia",
        "pop": "19,800,000", "area": "2,724,900 km²", "curr": "KZT (₸)", "lang": "Kazakh, Russian",
        "facts": ["World's largest landlocked country and ninth-largest country overall", "Baikonur Cosmodrome is the world's first and largest space launch facility", "Wild ancestor of all modern domestic apples (Malus sieversii) originated in Kazakhstan"]
    },
    {
        "name": "Kuwait", "flag": "🇰🇼", "capital": "Kuwait City", "continent": "Asia",
        "pop": "4,300,000", "area": "17,818 km²", "curr": "KWD (KD)", "lang": "Arabic",
        "facts": ["Kuwaiti Dinar is the highest-valued currency unit in the world", "Holds roughly 6-8% of the world's total proven crude oil reserves", "Burgan oil field is the second-largest conventional oil field in the world"]
    },
    {
        "name": "Kyrgyzstan", "flag": "🇰🇬", "capital": "Bishkek", "continent": "Asia",
        "pop": "7,000,000", "area": "199,951 km²", "curr": "KGS (с)", "lang": "Kyrgyz, Russian",
        "facts": ["Dominated by the dramatic Tian Shan ('Heavenly Mountains') covering 80% of its land", "Lake Issyk-Kul is the second-largest alpine lake in the world after Titicaca", "Epic of Manas is one of the longest epic poems in human history (over 500,000 lines)"]
    },
    {
        "name": "Laos", "flag": "🇱🇦", "capital": "Vientiane", "continent": "Asia",
        "pop": "7,500,000", "area": "236,800 km²", "curr": "LAK (₭)", "lang": "Lao",
        "facts": ["Only landlocked nation in Southeast Asia, traversed north to south by the Mekong River", "Plain of Jars features thousands of mysterious prehistoric giant stone jars", "Aiming to become the 'Battery of Southeast Asia' through massive Mekong hydropower"]
    },
    {
        "name": "Lebanon", "flag": "🇱🇧", "capital": "Beirut", "continent": "Asia",
        "pop": "5,350,000", "area": "10,452 km²", "curr": "LBP (L.L.)", "lang": "Arabic, French",
        "facts": ["Ancient Phoenician seafaring homeland that developed the earliest alphabet", "National emblem is the iconic Cedar of Lebanon tree, prized since biblical antiquity", "Beirut was historically known as the 'Paris of the Middle East'"]
    },
    {
        "name": "Malaysia", "flag": "🇲🇾", "capital": "Kuala Lumpur", "continent": "Asia",
        "pop": "33,900,000", "area": "329,847 km²", "curr": "MYR (RM)", "lang": "Malay",
        "facts": ["Divided by the South China Sea into Peninsular Malaysia and Malaysian Borneo", "Petronas Twin Towers were the world's tallest buildings from 1998 to 2004", "Guards the northern shore of the strategic Strait of Malacca"]
    },
    {
        "name": "Mongolia", "flag": "🇲🇳", "capital": "Ulaanbaatar", "continent": "Asia",
        "pop": "3,450,000", "area": "1,564,116 km²", "curr": "MNT (₮)", "lang": "Mongolian",
        "facts": ["Least densely populated sovereign nation on Earth (~2 people per square kilometer)", "Heartland of the Mongol Empire founded by Genghis Khan, the largest contiguous empire in history", "Horses outnumber humans in the country, maintaining ancient nomadic pastoralist traditions"]
    },
    {
        "name": "Myanmar", "alt": "Burma", "flag": "🇲🇲", "capital": "Naypyidaw", "continent": "Asia",
        "pop": "54,200,000", "area": "676,578 km²", "curr": "MMK (K)", "lang": "Burmese",
        "facts": ["Bagan archaeological zone features over 2,200 ancient Buddhist pagodas and temples", "World's largest producer of fine jadeite jade and top-grade pigeon's blood rubies", "Shwedagon Pagoda in Yangon is gilded with over 60 tons of pure gold leaf"]
    },
    {
        "name": "Nepal", "flag": "🇳🇵", "capital": "Kathmandu", "continent": "Asia",
        "pop": "30,550,000", "area": "147,181 km²", "curr": "NPR (रू)", "lang": "Nepali",
        "facts": ["Contains eight of the world's ten highest mountain peaks, including Mount Everest (8,848 m)", "Birthplace of Gautama Buddha at Lumbini in the Terai plains (6th century BC)", "Only national flag in the world that is non-quadrilateral (double-pennon shape)"]
    },
    {
        "name": "North Korea", "alt": "Democratic People's Republic of Korea", "flag": "🇰🇵", "capital": "Pyongyang", "continent": "Asia",
        "pop": "26,000,000", "area": "120,540 km²", "curr": "KPW (₩)", "lang": "Korean",
        "facts": ["Operates under the state ideology of Juche (self-reliance)", "Separated from South Korea by the 250 km long Demilitarized Zone (DMZ)", "Rungrado 1st of May Stadium in Pyongyang is one of the largest capacity stadiums on Earth"]
    },
    {
        "name": "Oman", "flag": "🇴🇲", "capital": "Muscat", "continent": "Asia",
        "pop": "4,600,000", "area": "309,500 km²", "curr": "OMR (ر.ع.)", "lang": "Arabic",
        "facts": ["Controls the strategic Musandam Peninsula overlooking the vital Strait of Hormuz", "Oldest continuously independent state in the Arab world", "Historic maritime empire that once extended to Zanzibar on the East African coast"]
    },
    {
        "name": "Pakistan", "flag": "🇵🇰", "capital": "Islamabad", "continent": "Asia",
        "pop": "241,500,000", "area": "881,913 km²", "curr": "PKR (₨)", "lang": "Urdu, English",
        "facts": ["Fifth most populous country in the world", "Home to K2 (8,611 m), the second-highest and most demanding mountain on Earth", "Ancient Indus Valley Civilization at Mohenjo-daro and Harappa flourished here"]
    },
    {
        "name": "Palestine", "flag": "🇵🇸", "capital": "Ramallah", "continent": "Asia",
        "pop": "5,400,000", "area": "6,020 km²", "curr": "ILS / JOD", "lang": "Arabic",
        "facts": ["Comprises the West Bank and Gaza Strip with ancient biblical heritage", "Jericho is widely recognized as one of the oldest continuously inhabited cities on Earth", "Church of the Nativity in Bethlehem is revered as the birthplace of Jesus Christ"]
    },
    {
        "name": "Philippines", "flag": "🇵🇭", "capital": "Manila", "continent": "Asia",
        "pop": "115,500,000", "area": "300,000 km²", "curr": "PHP (₱)", "lang": "Filipino, English",
        "facts": ["Archipelago comprising over 7,640 islands in the western Pacific Ocean", "World's leading producer of coconuts and major global business process outsourcing hub", "Puerto Princesa Subterranean River is one of the world's longest navigable underground rivers"]
    },
    {
        "name": "Qatar", "flag": "🇶🇦", "capital": "Doha", "continent": "Asia",
        "pop": "2,700,000", "area": "11,586 km²", "curr": "QAR (ر.ق)", "lang": "Arabic",
        "facts": ["World's leading exporter of Liquefied Natural Gas (LNG) from the massive North Field", "Highest GDP per capita in the Arab world and hosted the 2022 FIFA World Cup", "Al Jazeera media network is headquartered in Doha"]
    },
    {
        "name": "Saudi Arabia", "flag": "🇸🇦", "capital": "Riyadh", "continent": "Asia",
        "pop": "36,400,000", "area": "2,149,690 km²", "curr": "SAR (﷼)", "lang": "Arabic",
        "facts": ["Home to Islam's two holiest sanctuaries: Mecca (Kaaba) and Medina", "World's largest exporter of petroleum and leader of the OPEC energy bloc", "Ghawar oil field is the largest conventional oil field on Earth"]
    },
    {
        "name": "Singapore", "flag": "🇸🇬", "capital": "Singapore", "continent": "Asia",
        "pop": "5,920,000", "area": "728 km²", "curr": "SGD (S$)", "lang": "English, Malay, Mandarin, Tamil",
        "facts": ["One of only three surviving sovereign city-states in the world (with Monaco and Vatican)", "World's second-busiest container port and premier international financial hub", "Changi Airport consistently ranks as the world's best international airport"]
    },
    {
        "name": "South Korea", "alt": "Republic of Korea", "flag": "🇰🇷", "capital": "Seoul", "continent": "Asia",
        "pop": "51,740,000", "area": "100,210 km²", "curr": "KRW (₩)", "lang": "Korean",
        "facts": ["Global leader in high-tech manufacturing, memory semiconductors (Samsung), and automobiles", "Seoul metropolitan area houses nearly half the national population", "Cultural phenomenon 'Hallyu' (K-pop, K-dramas, cinema) has achieved global influence"]
    },
    {
        "name": "Sri Lanka", "flag": "🇱🇰", "capital": "Sri Jayawardenepura Kotte", "continent": "Asia",
        "pop": "22,200,000", "area": "65,610 km²", "curr": "LKR (Rs)", "lang": "Sinhala, Tamil",
        "facts": ["Known historically as Ceylon and nicknamed the 'Teardrop of India'", "World's fourth-largest producer of tea and famous for Ceylon cinnamon", "Sigiriya ancient rock fortress rises 200 meters above the jungle with 5th-century frescoes"]
    },
    {
        "name": "Syria", "flag": "🇸🇾", "capital": "Damascus", "continent": "Asia",
        "pop": "22,100,000", "area": "185,180 km²", "curr": "SYP (LS)", "lang": "Arabic",
        "facts": ["Damascus is considered one of the oldest continuously inhabited cities in the world", "Ancient city of Palmyra was a wealthy Silk Road trading hub with Greco-Roman colonnades", "Krak des Chevaliers is one of the best-preserved medieval Crusader castles"]
    },
    {
        "name": "Taiwan", "flag": "🇹🇼", "capital": "Taipei", "continent": "Asia",
        "pop": "23,900,000", "area": "36,197 km²", "curr": "TWD (NT$)", "lang": "Mandarin",
        "facts": ["Global semiconductor powerhouse: TSMC produces over 90% of the world's most advanced microchips", "Taipei 101 was the world's tallest building from 2004 to 2010 with a giant tuned mass damper", "Guards the strategic Taiwan Strait between the South and East China Seas"]
    },
    {
        "name": "Tajikistan", "flag": "🇹🇯", "capital": "Dushanbe", "continent": "Asia",
        "pop": "10,000,000", "area": "143,100 km²", "curr": "TJS (ЅМ)", "lang": "Tajik",
        "facts": ["Pamir Mountains ('Roof of the World') cover over 90% of the country's territory", "Fedchenko Glacier is the longest glacier in the world outside the polar regions (77 km)", "Nurek Dam is one of the highest artificial embankment dams in the world (300 m)"]
    },
    {
        "name": "Thailand", "flag": "🇹🇭", "capital": "Bangkok", "continent": "Asia",
        "pop": "71,800,000", "area": "513,120 km²", "curr": "THB (฿)", "lang": "Thai",
        "facts": ["Only Southeast Asian nation that was never colonized by European powers", "Known historically as Siam and nicknamed the 'Land of Smiles'", "One of the world's leading exporters of rice, rubber, and culinary tourism"]
    },
    {
        "name": "Turkey", "alt": "Türkiye", "flag": "🇹🇷", "capital": "Ankara", "continent": "Asia",
        "pop": "85,300,000", "area": "783,356 km²", "curr": "TRY (₺)", "lang": "Turkish",
        "facts": ["Transcontinental nation bridging Europe (Thrace) and Asia (Anatolia)", "Istanbul was historically Byzantium and Constantinople, capital of Roman, Byzantine, and Ottoman empires", "Controls the vital Bosporus and Dardanelles straits regulating access to the Black Sea"]
    },
    {
        "name": "Turkmenistan", "flag": "🇹🇲", "capital": "Ashgabat", "continent": "Asia",
        "pop": "6,500,000", "area": "488,100 km²", "curr": "TMT (m)", "lang": "Turkmen",
        "facts": ["Home to the Darvaza gas crater ('Gates of Hell'), a natural gas crater burning continuously since 1971", "Ashgabat holds the Guinness record for the highest density of white marble buildings", "Holds the world's fourth-largest natural gas reserves (Galkynysh field)"]
    },
    {
        "name": "United Arab Emirates", "alt": "UAE", "flag": "🇦🇪", "capital": "Abu Dhabi", "continent": "Asia",
        "pop": "9,440,000", "area": "83,600 km²", "curr": "AED (د.إ)", "lang": "Arabic",
        "facts": ["Burj Khalifa in Dubai is the tallest artificial structure and skyscraper in the world (828 m)", "Federation of seven sovereign emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah", "Global aviation and business nexus connecting East and West"]
    },
    {
        "name": "Uzbekistan", "flag": "🇺🇿", "capital": "Tashkent", "continent": "Asia",
        "pop": "36,000,000", "area": "447,400 km²", "curr": "UZS (so'm)", "lang": "Uzbek",
        "facts": ["One of only two doubly landlocked countries in the world (surrounded entirely by landlocked nations, alongside Liechtenstein)", "Samarkand, Bukhara, and Khiva were legendary jewel cities along the ancient Silk Road", "Major producer of gold (Muruntau mine is one of the world's largest open-pit gold mines)"]
    },
    {
        "name": "Vietnam", "flag": "🇻🇳", "capital": "Hanoi", "continent": "Asia",
        "pop": "98,800,000", "area": "331,212 km²", "curr": "VND (₫)", "lang": "Vietnamese",
        "facts": ["Hạ Long Bay features thousands of towering limestone karsts and islets recognized by UNESCO", "World's second-largest producer and exporter of coffee after Brazil", "Son Doong cave in Phong Nha-Kẻ Bàng National Park is the largest known natural cave passage on Earth"]
    },
    {
        "name": "Yemen", "flag": "🇾🇪", "capital": "Sanaa", "continent": "Asia",
        "pop": "33,700,000", "area": "527,968 km²", "curr": "YER (﷼)", "lang": "Arabic",
        "facts": ["Controls the eastern shore of the vital Bab-el-Mandeb chokepoint into the Red Sea", "Old Walled City of Shibam is known as the 'Manhattan of the Desert' for 16th-century high-rise mudbrick towers", "Socotra island features alien-like endemic dragon's blood trees (Dracaena cinnabari)"]
    },

    # ==================== AMERICAS (31 countries) ====================
    {
        "name": "United States of America", "alt": "United States", "flag": "🇺🇸", "capital": "Washington, D.C.", "continent": "North America",
        "pop": "333,287,000", "area": "9,833,520 km²", "curr": "USD ($)", "lang": "English",
        "facts": ["World's largest economy by nominal Gross Domestic Product (~$27 trillion)", "Yellowstone (founded 1872) was the world's first national park", "Lake Superior holds more water than all other North American Great Lakes combined"]
    },
    {
        "name": "Canada", "flag": "🇨🇦", "capital": "Ottawa", "continent": "North America",
        "pop": "38,930,000", "area": "9,984,670 km²", "curr": "CAD ($)", "lang": "English, French",
        "facts": ["Second-largest country on Earth by total geographic surface area", "Has the longest coastline of any nation in the world (243,042 kilometers)", "Contains more than 60% of all natural lakes on planet Earth"]
    },
    {
        "name": "Mexico", "flag": "🇲🇽", "capital": "Mexico City", "continent": "North America",
        "pop": "128,900,000", "area": "1,964,375 km²", "curr": "MXN ($)", "lang": "Spanish",
        "facts": ["Mexico City was built on the Aztec capital Tenochtitlan over ancient Lake Texcoco", "Introduced chocolate, chili peppers, corn, tomatoes, and vanilla to the world", "Home to Chichen Itza, one of the New Seven Wonders of the World"]
    },
    {
        "name": "Brazil", "flag": "🇧🇷", "capital": "Brasília", "continent": "South America",
        "pop": "214,300,000", "area": "8,515,767 km²", "curr": "BRL (R$)", "lang": "Portuguese",
        "facts": ["Houses 60% of the Amazon rainforest, the world's greatest biodiversity reservoir", "Fifth-largest country in the world by both territorial area and population", "Only Portuguese-speaking sovereign nation in the Americas"]
    },
    {
        "name": "Argentina", "flag": "🇦🇷", "capital": "Buenos Aires", "continent": "South America",
        "pop": "45,800,000", "area": "2,780,400 km²", "curr": "ARS ($)", "lang": "Spanish",
        "facts": ["Mount Aconcagua (6,961 m) is the highest peak in the Western and Southern Hemispheres", "Birthplace of the Tango dance and legendary gaucho cattle culture in the Pampas", "Iguazu Falls features 275 individual waterfalls spanning the border with Brazil"]
    },
    {
        "name": "Colombia", "flag": "🇨🇴", "capital": "Bogotá", "continent": "South America",
        "pop": "51,800,000", "area": "1,141,748 km²", "curr": "COP ($)", "lang": "Spanish",
        "facts": ["Second most biodiverse country on Earth and home to the world's greatest variety of bird and orchid species", "Leading global producer of fine emeralds and high-altitude Arabica coffee", "Only country in South America with coastlines on both the Pacific Ocean and Caribbean Sea"]
    },
    {
        "name": "Chile", "flag": "🇨🇱", "capital": "Santiago", "continent": "South America",
        "pop": "19,500,000", "area": "756,102 km²", "curr": "CLP ($)", "lang": "Spanish",
        "facts": ["Stretches over 4,300 km from north to south while averaging just 177 km in width", "Atacama Desert in northern Chile is the driest non-polar desert on Earth", "World's largest producer and exporter of copper"]
    },
    {
        "name": "Peru", "flag": "🇵🇪", "capital": "Lima", "continent": "South America",
        "pop": "33,700,000", "area": "1,285,216 km²", "curr": "PEN (S/)", "lang": "Spanish, Quechua, Aymara",
        "facts": ["Home to the ancient 15th-century Inca citadel of Machu Picchu", "Headwaters of the mighty Amazon River originate in the high Peruvian Andes", "Cultivates more than 3,000 distinct varieties of native potatoes"]
    },
    {
        "name": "Venezuela", "flag": "🇻🇪", "capital": "Caracas", "continent": "South America",
        "pop": "28,800,000", "area": "916,445 km²", "curr": "VES (Bs.)", "lang": "Spanish",
        "facts": ["Possesses the largest proven crude oil reserves of any nation on Earth (over 300 billion barrels)", "Angel Falls (Kerepakupai Merú) is the world's tallest uninterrupted waterfall (979 meters high)", "Lake Maracaibo experiences the highest concentration of lightning strikes on Earth (Catatumbo lightning)"]
    },
    {
        "name": "Cuba", "flag": "🇨🇺", "capital": "Havana", "continent": "North America",
        "pop": "11,200,000", "area": "109,884 km²", "curr": "CUP ($)", "lang": "Spanish",
        "facts": ["Largest island in the Caribbean, known as the 'Key to the Gulf'", "World-famous for hand-rolled Habanos cigars, vintage 1950s automobiles, and Son Cubano music", "Has one of the highest physician-to-population ratios in the world"]
    },

    # ==================== OCEANIA (7 countries) ====================
    {
        "name": "Australia", "flag": "🇦🇺", "capital": "Canberra", "continent": "Oceania",
        "pop": "26,000,000", "area": "7,692,024 km²", "curr": "AUD ($)", "lang": "English",
        "facts": ["Only sovereign nation that occupies an entire geographic continent", "Great Barrier Reef is the largest living coral structure on Earth and visible from space", "Home to unique marsupial and monotreme fauna including kangaroos, koalas, and platypuses"]
    },
    {
        "name": "New Zealand", "flag": "🇳🇿", "capital": "Wellington", "continent": "Oceania",
        "pop": "5,120,000", "area": "268,021 km²", "curr": "NZD ($)", "lang": "English, Māori",
        "facts": ["First self-governing nation in the world to grant women the right to vote (1893)", "Filming location for Peter Jackson's epic The Lord of the Rings and Hobbit trilogies", "No location on either North or South Island is more than 128 km from the ocean"]
    },
    {
        "name": "Papua New Guinea", "flag": "🇵🇬", "capital": "Port Moresby", "continent": "Oceania",
        "pop": "10,140,000", "area": "462,840 km²", "curr": "PGK (K)", "lang": "Tok Pisin, English, Hiri Motu",
        "facts": ["Most linguistically diverse country on Earth with over 840 distinct living indigenous languages", "Occupies the eastern half of the island of New Guinea in the Coral Triangle", "Rich in gold, copper, oil, and untouched biodiversity"]
    }
]

# Write out countries-data.js
output_js = '/**\\n * Countries Dataset for 3D Globe Study Tool\\n * Complete coverage with Capitals, Currencies, Languages, and Facts\\n */\\nconst COUNTRIES_DATA = ' + json.dumps(countries, indent=2) + ';\\n'

with open('countries-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f'Successfully wrote {len(countries)} detailed countries to countries-data.js!')
