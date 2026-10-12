/**
 * GlobeStudy 3D - Ultimate World Geography Platform
 * Integrated Layers:
 * - Real GeoJSON Country Borders & NASA Blue Marble Textures
 * - Always-Visible Country Names (All 177 Sovereign Nations)
 * - Major World Cities on Zoom (Dynamic Level of Detail: Tier 1 & Tier 2)
 * - Geopolitical Alliances (NATO, BRICS, EU, OPEC, G7, ASEAN)
 * - Tectonic Plates & Pacific Ring of Fire
 * - Seven Summits & Major Mountain Ranges
 * - Major World Rivers (Nile, Amazon, Yangtze, Mississippi, etc.)
 * - Major Landforms (Deserts, Plateaus)
 * - Oceans, Seas, Gulfs, Mariana Trench, Great Barrier Reef
 * - Strategic Straits & Chokepoints (with golden radar rings)
 * - 3D Vertical Megacities (Population Elevation Columns)
 * - Subsea Internet Fiber-Optic Cables
 * - Maritime Trade Routes & Historic Voyages (Magellan, Columbus)
 */

(function () {
    'use strict';

    // Application State
    const state = {
        world: null,
        hoveredFeature: null,
        selectedEntity: null,
        mapMode: 'satellite', // 'satellite' | 'political' | 'night'
        activeAlliance: null, // 'nato' | 'brics' | 'eu' | 'opec' | 'g7' | 'asean' | null
        activeContinent: 'all',
        currentZoomTier: 'far', // 'far' (>1.7) | 'mid' (1.05-1.7) | 'close' (<=1.05)

        // Layer Toggles
        showCountryNames: true,
        showCities: true,
        showBorders: true,
        showCapitals: true,
        showTectonic: true,
        showSummits: true,
        showRivers: true,
        showLandforms: true,
        showOceans: true,
        showStraits: true,
        showMarineFeatures: true,
        showTradeRoutes: true,
        showCables: true,
        showMegacities: true,
        showVoyages: false,
        showAtmosphere: true,
        showGrid: false
    };

    // Continent Colors for Political Mode
    const continentColors = {
        'Asia': 'rgba(239, 68, 68, 0.35)',
        'Europe': 'rgba(168, 85, 247, 0.35)',
        'Africa': 'rgba(234, 179, 8, 0.35)',
        'North America': 'rgba(34, 197, 94, 0.35)',
        'South America': 'rgba(249, 115, 22, 0.35)',
        'Oceania': 'rgba(236, 72, 153, 0.35)',
        'Antarctica': 'rgba(148, 163, 184, 0.35)'
    };

    // Helper: Compute center lat/lng of GeoJSON feature
    function getFeatureCenter(feature) {
        const name = (feature.properties.ADMIN || feature.properties.NAME || '').toLowerCase();
        const match = COUNTRIES_DATA.find(c =>
            c.name.toLowerCase() === name ||
            (c.code && c.code === feature.properties.ISO_A2)
        );
        if (match) return { lat: match.lat, lng: match.lon, countryData: match };

        let totalLat = 0, totalLng = 0, count = 0;
        function walkCoords(coords) {
            if (typeof coords[0] === 'number') {
                totalLng += coords[0];
                totalLat += coords[1];
                count++;
            } else {
                coords.forEach(walkCoords);
            }
        }
        if (feature.geometry && feature.geometry.coordinates) {
            walkCoords(feature.geometry.coordinates);
        }
        return {
            lat: count > 0 ? totalLat / count : 0,
            lng: count > 0 ? totalLng / count : 0,
            countryData: null
        };
    }

    // Helper: Build Combined Paths Data (Tectonic Plates + Rivers)
    function buildPathsData() {
        const paths = [];
        if (state.showTectonic && typeof TECTONIC_PATHS !== 'undefined') {
            paths.push(...TECTONIC_PATHS);
        }
        if (state.showRivers && typeof RIVERS_PATHS !== 'undefined') {
            paths.push(...RIVERS_PATHS);
        }
        return paths;
    }

    // Helper: Build Combined Arcs Data (Trade Routes + Subsea Cables + Historic Voyages)
    function buildArcsData() {
        const arcs = [];
        if (state.showTradeRoutes && typeof TRADE_ROUTES_DATA !== 'undefined') {
            arcs.push(...TRADE_ROUTES_DATA);
        }
        if (state.showCables && typeof SUBSEA_CABLES_DATA !== 'undefined') {
            arcs.push(...SUBSEA_CABLES_DATA);
        }
        if (state.showVoyages && typeof HISTORIC_VOYAGES_DATA !== 'undefined') {
            arcs.push(...HISTORIC_VOYAGES_DATA);
        }
        return arcs;
    }

    // Determine current zoom tier based on camera altitude
    function getZoomTier(altitude) {
        if (altitude <= 1.05) return 'close';
        if (altitude <= 1.7) return 'mid';
        return 'far';
    }

    // Update zoom indicator in HUD
    function updateZoomIndicator(tier) {
        const txt = document.getElementById('zoom-level-text');
        if (!txt) return;
        if (tier === 'far') {
            txt.innerHTML = '<span style="color:#94a3b8">Global View</span> (Zoom in for cities)';
        } else if (tier === 'mid') {
            txt.innerHTML = '<span style="color:#38bdf8">Continental View</span> (Megacities active)';
        } else {
            txt.innerHTML = '<span style="color:#4ade80">Regional View</span> (Full city details active)';
        }
    }

    // Helper: Build Combined Labels Data (Dynamic Country Names + Cities on Zoom)
    function buildLabelsData() {
        const list = [];
        const zoomTier = state.currentZoomTier;

        // 1. ALWAYS-VISIBLE COUNTRY NAMES (All 177 Sovereign Nations)
        if (state.showCountryNames && typeof COUNTRIES_GEOJSON !== 'undefined' && COUNTRIES_GEOJSON.features) {
            COUNTRIES_GEOJSON.features.forEach(feat => {
                const name = feat.properties.ADMIN || feat.properties.NAME;
                const center = getFeatureCenter(feat);
                if (!center.lat && !center.lng) return;

                // Continent filter
                if (state.activeContinent !== 'all' && feat.properties.CONTINENT !== state.activeContinent) {
                    return;
                }

                // Sizing based on country population / area
                const pop = feat.properties.POP_EST || 0;
                let size = 0.88;
                let color = '#f8fafc';

                if (pop > 80000000 || ['Russia', 'Canada', 'United States', 'China', 'Brazil', 'Australia', 'India'].includes(name)) {
                    size = 1.25;
                    color = '#ffffff';
                } else if (pop > 25000000) {
                    size = 1.02;
                    color = '#f1f5f9';
                }

                list.push({
                    name: name,
                    isCountryName: true,
                    lat: center.lat,
                    lng: center.lng,
                    size: size,
                    color: color,
                    dotRadius: 0, // No dot, pure prominent text
                    altitude: 0.012,
                    data: feat
                });
            });
        }

        // 2. MAJOR WORLD CITIES ON ZOOM (Dynamic LOD)
        if (state.showCities && typeof CITIES_DATA !== 'undefined') {
            CITIES_DATA.forEach(city => {
                // Tier 1 shows at 'mid' and 'close'
                // Tier 2 shows at 'close' only
                let visible = false;
                if (zoomTier === 'mid' && city.tier === 1) visible = true;
                if (zoomTier === 'close') visible = true;

                if (visible) {
                    list.push({
                        name: '• ' + city.name,
                        isCity: true,
                        lat: city.lat,
                        lng: city.lon,
                        size: city.tier === 1 ? 0.92 : 0.8,
                        color: city.isCapital ? '#fde047' : '#38bdf8', // Yellow for capitals, cyan for major cities
                        dotRadius: 0.26,
                        altitude: 0.015,
                        data: city
                    });
                }
            });
        }

        // 3. Oceans & Major Seas
        if (state.showOceans && typeof OCEANS_DATA !== 'undefined') {
            OCEANS_DATA.forEach(o => {
                list.push({
                    name: o.name,
                    isOcean: true,
                    lat: o.lat,
                    lng: o.lon,
                    size: o.size || 1.4,
                    color: o.color || '#67e8f9',
                    dotRadius: 0,
                    altitude: 0.01,
                    data: o
                });
            });
        }

        // 4. Strategic Straits & Chokepoints
        if (state.showStraits && typeof STRAITS_DATA !== 'undefined') {
            STRAITS_DATA.forEach(s => {
                list.push({
                    name: '⚓ ' + s.name,
                    isStrait: true,
                    lat: s.lat,
                    lng: s.lon,
                    size: 1.05,
                    color: '#facc15',
                    dotRadius: 0.38,
                    altitude: 0.014,
                    data: s
                });
            });
        }

        // 5. Seven Summits & Mountains
        if (state.showSummits && typeof SUMMITS_DATA !== 'undefined') {
            SUMMITS_DATA.forEach(m => {
                list.push({
                    name: '▲ ' + m.name.split(' ')[0] + ` (${m.elev.split(' ')[0]})`,
                    isSummit: true,
                    lat: m.lat,
                    lng: m.lon,
                    size: 0.95,
                    color: '#fef08a',
                    dotRadius: 0.35,
                    altitude: 0.015,
                    data: m
                });
            });
        }

        // 6. Landforms: Deserts & Plateaus
        if (state.showLandforms && typeof LANDFORMS_DATA !== 'undefined') {
            LANDFORMS_DATA.forEach(l => {
                list.push({
                    name: (l.type === 'Desert' ? '🏜️ ' : '⛰️ ') + l.name,
                    isLandform: true,
                    lat: l.lat,
                    lng: l.lon,
                    size: l.size || 1.15,
                    color: l.color || '#fbbf24',
                    dotRadius: 0,
                    altitude: 0.012,
                    data: l
                });
            });
        }

        // 7. Marine Features: Trenches, Reefs, Gulfs
        if (state.showMarineFeatures && typeof MARINE_FEATURES_DATA !== 'undefined') {
            MARINE_FEATURES_DATA.forEach(mf => {
                list.push({
                    name: (mf.type.includes('Trench') ? '🔻 ' : mf.type.includes('Reef') ? '🪸 ' : '🌊 ') + mf.name,
                    isMarineFeature: true,
                    lat: mf.lat,
                    lng: mf.lon,
                    size: 0.95,
                    color: '#4ade80',
                    dotRadius: 0.28,
                    altitude: 0.012,
                    data: mf
                });
            });
        }

        return list;
    }

    // Initialize 3D Globe
    function initGlobe() {
        const container = document.getElementById('globe-container');

        state.world = Globe()(container)
            // Base Textures
            .globeImageUrl('earth-blue-marble.jpg')
            .bumpImageUrl('earth-topology.png')
            .showAtmosphere(true)
            .atmosphereColor('#38bdf8')
            .atmosphereAltitude(0.2)

            // 1. Country Polygons
            .polygonsData(COUNTRIES_GEOJSON.features)
            .polygonAltitude(feat => feat === state.hoveredFeature ? 0.038 : 0.006)
            .polygonCapColor(feat => {
                if (feat === state.hoveredFeature) {
                    return 'rgba(56, 189, 248, 0.7)';
                }

                // Alliance Highlighting Mode
                if (state.activeAlliance && ALLIANCES_DATA[state.activeAlliance]) {
                    const alliance = ALLIANCES_DATA[state.activeAlliance];
                    const countryName = feat.properties.ADMIN || feat.properties.NAME;
                    const isMember = alliance.countries.some(c => c.toLowerCase() === countryName.toLowerCase());
                    if (isMember) {
                        return alliance.color;
                    }
                    return 'rgba(15, 23, 42, 0.75)';
                }

                // Continent Filter
                const cont = feat.properties.CONTINENT;
                if (state.activeContinent !== 'all' && cont !== state.activeContinent) {
                    return 'rgba(15, 23, 42, 0.75)';
                }

                // Map Modes
                if (state.mapMode === 'political') {
                    return continentColors[cont] || 'rgba(56, 189, 248, 0.3)';
                } else if (state.mapMode === 'night') {
                    return 'rgba(0, 0, 0, 0.05)';
                } else {
                    return 'rgba(255, 255, 255, 0.03)';
                }
            })
            .polygonSideColor(() => 'rgba(2, 132, 199, 0.25)')
            .polygonStrokeColor(feat => {
                if (feat === state.hoveredFeature) return '#ffffff';
                if (!state.showBorders) return 'rgba(0, 0, 0, 0)';

                if (state.activeAlliance && ALLIANCES_DATA[state.activeAlliance]) {
                    const alliance = ALLIANCES_DATA[state.activeAlliance];
                    const countryName = feat.properties.ADMIN || feat.properties.NAME;
                    const isMember = alliance.countries.some(c => c.toLowerCase() === countryName.toLowerCase());
                    if (isMember) return alliance.strokeColor;
                }

                return state.mapMode === 'political' ? 'rgba(255, 255, 255, 0.45)' : 'rgba(56, 189, 248, 0.7)';
            })
            .polygonLabel(({ properties: d }) => {
                const match = COUNTRIES_DATA.find(c => c.name.toLowerCase() === (d.ADMIN || d.NAME).toLowerCase());
                const flag = match ? match.flag : '🌐';
                const cap = match ? `<br/><small style="color:#94a3b8">Capital: ${match.capital}</small>` : '';
                return `
                    <div class="globe-tooltip">
                        <div style="font-size:15px; font-weight:700">${flag} ${d.ADMIN || d.NAME}</div>
                        <div style="font-size:12px; color:#cbd5e1">${d.CONTINENT || ''}${cap}</div>
                        <div style="font-size:11px; color:#38bdf8; margin-top:2px">Population: ${(d.POP_EST || 0).toLocaleString()}</div>
                    </div>
                `;
            })
            .onPolygonHover(hoverD => {
                state.hoveredFeature = hoverD;
                state.world.polygonAltitude(feat => feat === state.hoveredFeature ? 0.038 : 0.006);
                state.world.polygonCapColor(state.world.polygonCapColor());
                state.world.polygonStrokeColor(state.world.polygonStrokeColor());
            })
            .onPolygonClick(feat => {
                focusCountryFeature(feat);
            })

            // 2. Paths / Polylines (Tectonic Plates, Ring of Fire, Rivers)
            .pathsData(buildPathsData())
            .pathPoints(d => d.coords)
            .pathColor(d => d.color)
            .pathStroke(d => d.stroke || 2.0)
            .pathDashLength(d => d.dashLength || 0)
            .pathDashGap(d => d.dashGap || 0)
            .pathDashAnimateTime(d => d.dashAnimateTime || 0)
            .pathLabel(d => `
                <div class="globe-tooltip">
                    <div style="font-size:14px; font-weight:700; color:${d.color}">${d.name}</div>
                    <div style="font-size:11px; color:#cbd5e1">${d.length ? 'Length: ' + d.length : d.type}</div>
                    <div style="font-size:11px; color:#94a3b8; margin-top:2px">${d.description}</div>
                </div>
            `)
            .onPathClick(d => focusPathFeature(d))

            // 3. 3D Megacities (Vertical Elevation Columns)
            .pointsData(state.showMegacities ? MEGACITIES_DATA : [])
            .pointLat(d => d.lat)
            .pointLng(d => d.lon)
            .pointAltitude(d => d.alt)
            .pointRadius(0.45)
            .pointColor(d => d.color)
            .pointLabel(d => `
                <div class="globe-tooltip">
                    <div style="font-size:14px; font-weight:700; color:#38bdf8">🏙️ ${d.name}, ${d.country}</div>
                    <div style="font-size:12px; color:#facc15">Metro Pop: ${d.pop}</div>
                    <div style="font-size:11px; color:#94a3b8">${d.rank}</div>
                </div>
            `)
            .onPointClick(d => focusCity(d))

            // 4. Animated 3D Arcs (Trade Routes, Subsea Cables, Voyages)
            .arcsData(buildArcsData())
            .arcStartLat(d => d.start.lat)
            .arcStartLng(d => d.start.lon)
            .arcEndLat(d => d.end.lat)
            .arcEndLng(d => d.end.lon)
            .arcColor(d => d.color)
            .arcAltitude(d => d.altitude || 0.1)
            .arcStroke(1.3)
            .arcDashLength(0.4)
            .arcDashGap(0.2)
            .arcDashInitialGap((d, i) => i * 0.1)
            .arcDashAnimateTime(2600)
            .arcLabel(d => `
                <div class="globe-tooltip">
                    <div style="font-size:14px; font-weight:700; color:#38bdf8">${d.type.includes('Subsea') ? '🌐' : '🚢'} ${d.name}</div>
                    <div style="font-size:12px; color:#fbbf24">${d.type}</div>
                    <div style="font-size:11px; color:#cbd5e1; margin-top:2px">${d.description}</div>
                </div>
            `)
            .onArcClick(d => focusArcRoute(d))

            // 5. Pulsing Rings at Strategic Straits & Chokepoints
            .ringsData(state.showStraits ? STRAITS_DATA : [])
            .ringLat(d => d.lat)
            .ringLng(d => d.lon)
            .ringColor(() => '#facc15')
            .ringMaxRadius(3.5)
            .ringPropagationSpeed(2.2)
            .ringRepeatPeriod(1200)

            // 6. Permanent Labels (Countries Always Visible + Cities on Zoom)
            .labelsData(buildLabelsData())
            .labelLat(d => d.lat)
            .labelLng(d => d.lng)
            .labelText(d => d.name)
            .labelSize(d => d.size)
            .labelDotRadius(d => d.dotRadius)
            .labelColor(d => d.color)
            .labelAltitude(d => d.altitude || 0.012)
            .labelResolution(2)
            .onLabelClick(d => {
                if (d.isCountryName) focusCountryFeature(d.data);
                else if (d.isCity) focusCity(d.data);
                else if (d.isStrait) focusStrait(d.data);
                else if (d.isSummit) focusSummit(d.data);
                else if (d.isOcean) focusOcean(d.data);
                else if (d.isLandform) focusLandform(d.data);
                else if (d.isMarineFeature) focusMarineFeature(d.data);
            });

        // Controls setup
        state.world.controls().autoRotate = true;
        state.world.controls().autoRotateSpeed = 0.5;
        state.world.controls().enableDamping = true;
        state.world.controls().dampingFactor = 0.05;
        state.world.controls().minDistance = 140;
        state.world.controls().maxDistance = 600;

        // Dynamic Zoom-dependent Labels Listener
        function checkCameraZoom() {
            if (!state.world) return;
            const pov = state.world.pointOfView();
            const tier = getZoomTier(pov.altitude);
            if (tier !== state.currentZoomTier) {
                state.currentZoomTier = tier;
                updateZoomIndicator(tier);
                state.world.labelsData(buildLabelsData());
            }
        }

        state.world.controls().addEventListener('change', checkCameraZoom);
        setInterval(checkCameraZoom, 250); // Polling safeguard during smooth transitions

        // Initial view
        state.world.pointOfView({ lat: 20, lng: 0, altitude: 2.2 }, 1000);
        updateZoomIndicator('far');

        setupCoordinatesTracker();
    }

    // Hide all info card grids helper
    function hideAllGrids() {
        ['country-grid', 'city-grid', 'strait-grid', 'summit-grid', 'alliance-grid'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });
    }

    // 1. Focus Country
    function focusCountry(country) {
        state.selectedEntity = country;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        state.world.pointOfView({ lat: country.lat, lng: country.lon, altitude: 1.4 }, 1400);

        hideAllGrids();
        document.getElementById('country-grid').classList.remove('hidden');
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-lightbulb"></i> Study Facts';

        document.getElementById('info-flag').textContent = country.flag || '🌐';
        document.getElementById('info-name').textContent = country.name;
        document.getElementById('info-sub').textContent = `${country.continent} • Capital: ${country.capital}`;
        document.getElementById('info-capital').textContent = country.capital;
        document.getElementById('info-continent').textContent = country.continent;
        document.getElementById('info-population').textContent = country.population || 'N/A';
        document.getElementById('info-area').textContent = country.area || 'N/A';
        document.getElementById('info-currency').textContent = country.currency || 'N/A';
        document.getElementById('info-languages').textContent = country.languages || 'N/A';

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = (country.facts || []).map(f => `<li>${f}</li>`).join('');

        document.getElementById('info-panel').classList.remove('hidden');
    }

    function focusCountryFeature(feat) {
        const center = getFeatureCenter(feat);
        const name = feat.properties.ADMIN || feat.properties.NAME;
        const match = center.countryData || COUNTRIES_DATA.find(c => c.name.toLowerCase() === name.toLowerCase());

        if (match) {
            focusCountry(match);
        } else {
            focusCountry({
                name: name,
                flag: '🌐',
                capital: 'N/A',
                continent: feat.properties.CONTINENT || 'Unknown',
                population: (feat.properties.POP_EST || 0).toLocaleString(),
                area: 'N/A',
                currency: 'N/A',
                languages: 'N/A',
                facts: [
                    `Sovereign territory: ${feat.properties.SOVEREIGNT || name}`,
                    `Subregion: ${feat.properties.SUBREGION || 'N/A'}`,
                    `Estimated population: ${(feat.properties.POP_EST || 0).toLocaleString()}`
                ],
                lat: center.lat,
                lon: center.lng
            });
        }
    }

    // 2. Focus Major City
    function focusCity(city) {
        state.selectedEntity = city;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        // Zoom right into the city!
        state.world.pointOfView({ lat: city.lat, lng: city.lon, altitude: 0.8 }, 1400);

        hideAllGrids();
        document.getElementById('city-grid').classList.remove('hidden');
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-city" style="color:#38bdf8"></i> City Profile';

        document.getElementById('info-flag').textContent = '🏙️';
        document.getElementById('info-name').textContent = city.name;
        document.getElementById('info-sub').textContent = `${city.country} • Major World Metropolis`;

        document.getElementById('city-pop').textContent = city.pop || 'N/A';
        document.getElementById('city-country').textContent = city.country || 'N/A';
        document.getElementById('city-desc').textContent = city.desc || (city.isCapital ? 'National Capital' : 'Major Economic & Commercial Hub');

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = `
            <li><b>Metropolitan Population:</b> ${city.pop}</li>
            <li><b>Coordinates:</b> ${city.lat.toFixed(2)}° N, ${city.lon.toFixed(2)}° E</li>
            <li><b>Significance:</b> ${city.desc || 'Major urban center and regional economic hub'}</li>
            ${city.isCapital ? '<li><b>Administrative Status:</b> Official National Capital</li>' : ''}
        `;

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // 3. Focus Strategic Strait
    function focusStrait(strait) {
        state.selectedEntity = strait;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        state.world.pointOfView({ lat: strait.lat, lng: strait.lon, altitude: 1.1 }, 1400);

        hideAllGrids();
        document.getElementById('strait-grid').classList.remove('hidden');
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-anchor" style="color:var(--accent-amber)"></i> Strategic Importance';

        document.getElementById('info-flag').textContent = '⚓';
        document.getElementById('info-name').textContent = strait.name;
        document.getElementById('info-sub').textContent = strait.importance;

        document.getElementById('strait-waterway').textContent = strait.waterway;
        document.getElementById('strait-countries').textContent = strait.countries;
        document.getElementById('strait-traffic').textContent = strait.traffic;

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = strait.facts.map(f => `<li>${f}</li>`).join('');

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // 4. Focus Seven Summits / Mountain Peak
    function focusSummit(summit) {
        state.selectedEntity = summit;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        state.world.pointOfView({ lat: summit.lat, lng: summit.lon, altitude: 1.1 }, 1400);

        hideAllGrids();
        document.getElementById('summit-grid').classList.remove('hidden');
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-mountain" style="color:#facc15"></i> Mountaineering Facts';

        document.getElementById('info-flag').textContent = '🏔️';
        document.getElementById('info-name').textContent = summit.name;
        document.getElementById('info-sub').textContent = `${summit.continent} • Elevation: ${summit.elev}`;

        document.getElementById('summit-elev').textContent = summit.elev;
        document.getElementById('summit-range').textContent = summit.range;
        document.getElementById('summit-ascent').textContent = summit.firstAscent;

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = summit.facts.map(f => `<li>${f}</li>`).join('');

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // 5. Focus Geopolitical Alliance
    function focusAlliance(key) {
        const alliance = ALLIANCES_DATA[key];
        if (!alliance) return;

        state.activeAlliance = (state.activeAlliance === key) ? null : key;

        document.querySelectorAll('.alliance-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.alliance === state.activeAlliance);
        });

        state.world.polygonCapColor(state.world.polygonCapColor());
        state.world.polygonStrokeColor(state.world.polygonStrokeColor());

        if (state.activeAlliance) {
            hideAllGrids();
            document.getElementById('alliance-grid').classList.remove('hidden');
            document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-shield-alt" style="color:#3b82f6"></i> Alliance Details';

            document.getElementById('info-flag').textContent = alliance.badge.split(' ')[0];
            document.getElementById('info-name').textContent = alliance.name;
            document.getElementById('info-sub').textContent = `${alliance.badge} • ${alliance.membersCount} Member States`;

            document.getElementById('alliance-founded').textContent = alliance.founded;
            document.getElementById('alliance-members').textContent = `${alliance.membersCount} Sovereign Nations`;
            document.getElementById('alliance-hq').textContent = alliance.hq;

            const factsList = document.getElementById('info-facts-list');
            factsList.innerHTML = `
                <li><b>Description:</b> ${alliance.description}</li>
                ${alliance.facts.map(f => `<li>${f}</li>`).join('')}
                <li><b>Key Members:</b> ${alliance.countries.slice(0, 10).join(', ')}...</li>
            `;

            document.getElementById('info-panel').classList.remove('hidden');
        } else {
            document.getElementById('info-panel').classList.add('hidden');
        }
    }

    // 6. Focus Landform (Desert / Plateau)
    function focusLandform(lf) {
        state.selectedEntity = lf;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        state.world.pointOfView({ lat: lf.lat, lng: lf.lon, altitude: 1.6 }, 1400);

        hideAllGrids();
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-sun" style="color:#fbbf24"></i> Physical Geography';

        document.getElementById('info-flag').textContent = lf.type === 'Desert' ? '🏜️' : '⛰️';
        document.getElementById('info-name').textContent = lf.name;
        document.getElementById('info-sub').textContent = `${lf.type} • Area: ${lf.area}`;

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = lf.facts.map(f => `<li>${f}</li>`).join('');

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // 7. Focus Marine Feature (Trench / Reef / Gulf)
    function focusMarineFeature(mf) {
        state.selectedEntity = mf;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        state.world.pointOfView({ lat: mf.lat, lng: mf.lon, altitude: 1.5 }, 1400);

        hideAllGrids();
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-water" style="color:#4ade80"></i> Marine Geography';

        document.getElementById('info-flag').textContent = mf.badge ? mf.badge.split(' ')[0] : '🌊';
        document.getElementById('info-name').textContent = mf.name;
        document.getElementById('info-sub').textContent = `${mf.type} ${mf.depth ? '• Depth: ' + mf.depth : ''} ${mf.area ? '• Area: ' + mf.area : ''}`;

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = mf.facts.map(f => `<li>${f}</li>`).join('');

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // 8. Focus Ocean
    function focusOcean(ocean) {
        state.selectedEntity = ocean;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        state.world.pointOfView({ lat: ocean.lat, lng: ocean.lon, altitude: 1.8 }, 1400);

        hideAllGrids();
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-water" style="color:#67e8f9"></i> Oceanography & Geography';

        document.getElementById('info-flag').textContent = '🌊';
        document.getElementById('info-name').textContent = ocean.name;
        document.getElementById('info-sub').textContent = `${ocean.type} • Earth Hydrosphere`;

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = `<li>${ocean.description}</li>`;

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // 9. Focus River / Tectonic Path
    function focusPathFeature(feature) {
        state.selectedEntity = feature;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        const mid = feature.coords[Math.floor(feature.coords.length / 2)];
        state.world.pointOfView({ lat: mid[0], lng: mid[1], altitude: 1.6 }, 1400);

        hideAllGrids();
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-route" style="color:var(--accent)"></i> Feature Overview';

        document.getElementById('info-flag').textContent = feature.length ? '🌊' : '🌋';
        document.getElementById('info-name').textContent = feature.name;
        document.getElementById('info-sub').textContent = feature.length ? `River Basin • Length: ${feature.length}` : feature.type;

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = `
            ${feature.basin ? '<li><b>Basin / Drainage:</b> ' + feature.basin + '</li>' : ''}
            <li><b>Description:</b> ${feature.description}</li>
        `;

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // 10. Focus Arc (Trade Route, Subsea Cable, Historic Voyage)
    function focusArcRoute(route) {
        state.selectedEntity = route;
        state.world.controls().autoRotate = false;
        document.getElementById('btn-auto-rotate').classList.remove('active');

        const midLat = (route.start.lat + route.end.lat) / 2;
        const midLon = (route.start.lon + route.end.lon) / 2;
        state.world.pointOfView({ lat: midLat, lng: midLon, altitude: 1.7 }, 1400);

        hideAllGrids();
        document.getElementById('info-facts-title').innerHTML = '<i class="fas fa-network-wired" style="color:#c084fc"></i> Global Connection';

        const icon = route.type.includes('Subsea') ? '🌐' : route.type.includes('Circumnavigation') ? '🧭' : '🚢';
        document.getElementById('info-flag').textContent = icon;
        document.getElementById('info-name').textContent = route.name;
        document.getElementById('info-sub').textContent = route.type;

        const factsList = document.getElementById('info-facts-list');
        factsList.innerHTML = `
            <li><b>Origin:</b> ${route.start.name}</li>
            <li><b>Destination:</b> ${route.end.name}</li>
            <li><b>Significance:</b> ${route.description}</li>
        `;

        document.getElementById('info-panel').classList.remove('hidden');
    }

    // Set Map Mode (Satellite | Political | Night)
    function setMapMode(mode) {
        state.mapMode = mode;
        document.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.mode === mode);
        });

        if (mode === 'satellite') {
            state.world.globeImageUrl('earth-blue-marble.jpg');
            state.world.bumpImageUrl('earth-topology.png');
        } else if (mode === 'night') {
            state.world.globeImageUrl('earth-night.jpg');
            state.world.bumpImageUrl(null);
        } else if (mode === 'political') {
            state.world.globeImageUrl('earth-blue-marble.jpg');
            state.world.bumpImageUrl(null);
        }

        state.world.polygonCapColor(state.world.polygonCapColor());
        state.world.polygonStrokeColor(state.world.polygonStrokeColor());
    }

    // Setup Track Coordinates
    function setupCoordinatesTracker() {
        const container = document.getElementById('globe-container');
        container.addEventListener('mousemove', () => {
            const pov = state.world.pointOfView();
            if (pov) {
                const lat = pov.lat || 0;
                const lon = pov.lng || 0;
                document.getElementById('coord-lat').textContent = `${Math.abs(lat).toFixed(1)}° ${lat >= 0 ? 'N' : 'S'}`;
                document.getElementById('coord-lon').textContent = `${Math.abs(lon).toFixed(1)}° ${lon >= 0 ? 'E' : 'W'}`;
            }
        });
    }

    // Setup All Event Listeners
    function setupEventListeners() {
        // HUD Section Tabs Navigation
        document.querySelectorAll('.hud-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.hud-tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.hud-section').forEach(s => s.classList.remove('active'));
                btn.classList.add('active');
                const target = document.getElementById(btn.dataset.tab);
                if (target) target.classList.add('active');
            });
        });

        // Mode Switcher Buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => setMapMode(btn.dataset.mode));
        });

        // Alliances Buttons
        document.querySelectorAll('.alliance-btn').forEach(btn => {
            btn.addEventListener('click', () => focusAlliance(btn.dataset.alliance));
        });

        // Auto Rotate
        document.getElementById('btn-auto-rotate').addEventListener('click', function () {
            const cur = state.world.controls().autoRotate;
            state.world.controls().autoRotate = !cur;
            this.classList.toggle('active', !cur);
        });

        // Zoom In & Out
        document.getElementById('btn-zoom-in').addEventListener('click', () => {
            const pov = state.world.pointOfView();
            state.world.pointOfView({ altitude: Math.max(0.4, pov.altitude * 0.72) }, 400);
        });

        document.getElementById('btn-zoom-out').addEventListener('click', () => {
            const pov = state.world.pointOfView();
            state.world.pointOfView({ altitude: Math.min(4.5, pov.altitude * 1.35) }, 400);
        });

        // Reset View
        document.getElementById('btn-reset-view').addEventListener('click', () => {
            state.world.pointOfView({ lat: 20, lng: 0, altitude: 2.2 }, 800);
            state.world.controls().autoRotate = true;
            document.getElementById('btn-auto-rotate').classList.add('active');
            state.activeAlliance = null;
            document.querySelectorAll('.alliance-btn').forEach(b => b.classList.remove('active'));
            state.world.polygonCapColor(state.world.polygonCapColor());
        });

        // Layer Toggles
        document.getElementById('toggle-country-names').addEventListener('change', e => {
            state.showCountryNames = e.target.checked;
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-cities').addEventListener('change', e => {
            state.showCities = e.target.checked;
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-borders').addEventListener('change', e => {
            state.showBorders = e.target.checked;
            state.world.polygonStrokeColor(state.world.polygonStrokeColor());
        });

        document.getElementById('toggle-capitals').addEventListener('change', e => {
            state.showCapitals = e.target.checked;
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-tectonic').addEventListener('change', e => {
            state.showTectonic = e.target.checked;
            state.world.pathsData(buildPathsData());
        });

        document.getElementById('toggle-rivers').addEventListener('change', e => {
            state.showRivers = e.target.checked;
            state.world.pathsData(buildPathsData());
        });

        document.getElementById('toggle-summits').addEventListener('change', e => {
            state.showSummits = e.target.checked;
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-landforms').addEventListener('change', e => {
            state.showLandforms = e.target.checked;
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-oceans').addEventListener('change', e => {
            state.showOceans = e.target.checked;
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-straits').addEventListener('change', e => {
            state.showStraits = e.target.checked;
            state.world.ringsData(state.showStraits ? STRAITS_DATA : []);
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-marine-features').addEventListener('change', e => {
            state.showMarineFeatures = e.target.checked;
            state.world.labelsData(buildLabelsData());
        });

        document.getElementById('toggle-trade-routes').addEventListener('change', e => {
            state.showTradeRoutes = e.target.checked;
            state.world.arcsData(buildArcsData());
        });

        document.getElementById('toggle-cables').addEventListener('change', e => {
            state.showCables = e.target.checked;
            state.world.arcsData(buildArcsData());
        });

        document.getElementById('toggle-megacities').addEventListener('change', e => {
            state.showMegacities = e.target.checked;
            state.world.pointsData(state.showMegacities ? MEGACITIES_DATA : []);
        });

        document.getElementById('toggle-voyages').addEventListener('change', e => {
            state.showVoyages = e.target.checked;
            state.world.arcsData(buildArcsData());
        });

        document.getElementById('toggle-atmosphere').addEventListener('change', e => {
            state.world.showAtmosphere(e.target.checked);
        });

        document.getElementById('toggle-grid').addEventListener('change', e => {
            state.showGrid = e.target.checked;
            state.world.showGraticules(state.showGrid);
        });

        // Continent Filter
        document.querySelectorAll('.continent-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.continent-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.activeContinent = btn.dataset.continent;
                state.world.polygonCapColor(state.world.polygonCapColor());
                state.world.labelsData(buildLabelsData());

                const continentCenters = {
                    'Asia': { lat: 34, lng: 100, altitude: 1.8 },
                    'Europe': { lat: 50, lng: 15, altitude: 1.5 },
                    'Africa': { lat: 2, lng: 20, altitude: 1.8 },
                    'North America': { lat: 40, lng: -100, altitude: 1.8 },
                    'South America': { lat: -15, lng: -60, altitude: 1.8 },
                    'Oceania': { lat: -25, lng: 135, altitude: 1.8 },
                    'all': { lat: 20, lng: 0, altitude: 2.2 }
                };
                if (continentCenters[state.activeContinent]) {
                    state.world.pointOfView(continentCenters[state.activeContinent], 1200);
                }
            });
        });

        // Close Info Card
        document.getElementById('close-info').addEventListener('click', () => {
            document.getElementById('info-panel').classList.add('hidden');
        });

        // Comprehensive Global Search Autocomplete
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        searchInput.addEventListener('input', () => {
            const q = searchInput.value.toLowerCase().trim();
            if (!q) { searchResults.classList.remove('active'); return; }

            const results = [];

            // Alliances
            Object.keys(ALLIANCES_DATA).forEach(k => {
                const a = ALLIANCES_DATA[k];
                if (a.name.toLowerCase().includes(q) || k.includes(q)) {
                    results.push({ type: 'alliance', name: a.name, sub: a.badge, icon: '🛡️', key: k });
                }
            });

            // Cities
            if (typeof CITIES_DATA !== 'undefined') {
                CITIES_DATA.filter(c => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q))
                    .slice(0, 5)
                    .forEach(c => results.push({ type: 'city', name: c.name, sub: `City in ${c.country} · Pop: ${c.pop}`, icon: '🏙️', data: c }));
            }

            // Summits
            if (typeof SUMMITS_DATA !== 'undefined') {
                SUMMITS_DATA.filter(s => s.name.toLowerCase().includes(q) || s.range.toLowerCase().includes(q))
                    .forEach(s => results.push({ type: 'summit', name: s.name, sub: `Elev: ${s.elev} · ${s.range}`, icon: '🏔️', data: s }));
            }

            // Straits
            if (typeof STRAITS_DATA !== 'undefined') {
                STRAITS_DATA.filter(s => s.name.toLowerCase().includes(q) || s.importance.toLowerCase().includes(q))
                    .forEach(s => results.push({ type: 'strait', name: s.name, sub: s.importance, icon: '⚓', data: s }));
            }

            // Rivers
            if (typeof RIVERS_PATHS !== 'undefined') {
                RIVERS_PATHS.filter(r => r.name.toLowerCase().includes(q))
                    .forEach(r => results.push({ type: 'river', name: r.name, sub: `Length: ${r.length}`, icon: '🌊', data: r }));
            }

            // Landforms
            if (typeof LANDFORMS_DATA !== 'undefined') {
                LANDFORMS_DATA.filter(l => l.name.toLowerCase().includes(q))
                    .forEach(l => results.push({ type: 'landform', name: l.name, sub: `${l.type} · ${l.area}`, icon: '🏜️', data: l }));
            }

            // Oceans
            if (typeof OCEANS_DATA !== 'undefined') {
                OCEANS_DATA.filter(o => o.name.toLowerCase().includes(q))
                    .forEach(o => results.push({ type: 'ocean', name: o.name, sub: o.type, icon: '🌊', data: o }));
            }

            // Countries
            if (typeof COUNTRIES_DATA !== 'undefined') {
                COUNTRIES_DATA.filter(c => c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q))
                    .slice(0, 6)
                    .forEach(c => results.push({ type: 'country', name: c.name, sub: `Capital: ${c.capital} · ${c.continent}`, icon: c.flag || '🌐', data: c }));
            }

            if (results.length === 0) { searchResults.classList.remove('active'); return; }

            searchResults.innerHTML = results.slice(0, 8).map(item => `
                <div class="result-item" data-type="${item.type}" data-name="${item.name}">
                    <span style="font-size:20px">${item.icon}</span>
                    <div>
                        <div style="font-weight:600; font-size:13px">${item.name}</div>
                        <small style="color:var(--text-muted)">${item.sub}</small>
                    </div>
                </div>
            `).join('');
            searchResults.classList.add('active');

            searchResults.querySelectorAll('.result-item').forEach(el => {
                el.addEventListener('click', () => {
                    const type = el.dataset.type;
                    const name = el.dataset.name;
                    const item = results.find(r => r.name === name);
                    if (item) {
                        if (type === 'country') focusCountry(item.data);
                        else if (type === 'city') focusCity(item.data);
                        else if (type === 'strait') focusStrait(item.data);
                        else if (type === 'summit') focusSummit(item.data);
                        else if (type === 'river') focusPathFeature(item.data);
                        else if (type === 'landform') focusLandform(item.data);
                        else if (type === 'ocean') focusOcean(item.data);
                        else if (type === 'alliance') focusAlliance(item.key);
                    }
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                });
            });
        });

        document.addEventListener('click', e => {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.remove('active');
            }
        });

        setupQuizSystem();
    }

    // Geography Study Quiz
    function setupQuizSystem() {
        const quizModal = document.getElementById('quiz-modal');
        let currentQ = 0, score = 0, timerInterval = null;
        let questions = [];

        document.getElementById('btn-quiz').addEventListener('click', () => {
            document.getElementById('quiz-setup').classList.remove('hidden');
            document.getElementById('quiz-game').classList.add('hidden');
            document.getElementById('quiz-results').classList.add('hidden');
            quizModal.classList.remove('hidden');
        });

        document.getElementById('close-quiz').addEventListener('click', () => {
            quizModal.classList.add('hidden');
            if (timerInterval) clearInterval(timerInterval);
        });

        document.getElementById('start-quiz').addEventListener('click', () => {
            const category = document.getElementById('quiz-category').value;

            if (category === 'cities' && typeof CITIES_DATA !== 'undefined') {
                const shuffled = [...CITIES_DATA].sort(() => Math.random() - 0.5).slice(0, 5);
                questions = shuffled.map(city => {
                    const others = CITIES_DATA.filter(x => x.country !== city.country).sort(() => Math.random() - 0.5);
                    return {
                        qText: `Which country is the city of "${city.name}" located in?`,
                        correct: city.country,
                        opts: [city.country, others[0].country, others[1].country, others[2].country].sort(() => Math.random() - 0.5),
                        target: () => focusCity(city)
                    };
                });
            } else if (category === 'straits') {
                const shuffled = [...STRAITS_DATA].sort(() => Math.random() - 0.5).slice(0, 5);
                questions = shuffled.map(s => {
                    const others = STRAITS_DATA.filter(x => x.name !== s.name).sort(() => Math.random() - 0.5);
                    return {
                        qText: `Which strategic strait / canal connects ${s.waterway}?`,
                        correct: s.name,
                        opts: [s.name, others[0].name, others[1].name, others[2].name].sort(() => Math.random() - 0.5),
                        target: () => focusStrait(s)
                    };
                });
            } else if (category === 'summits') {
                const shuffled = [...SUMMITS_DATA].sort(() => Math.random() - 0.5).slice(0, 5);
                questions = shuffled.map(m => {
                    const others = SUMMITS_DATA.filter(x => x.name !== m.name).sort(() => Math.random() - 0.5);
                    return {
                        qText: `Which mountain is the highest peak in ${m.continent} (${m.elev})?`,
                        correct: m.name,
                        opts: [m.name, others[0].name, others[1].name, others[2].name].sort(() => Math.random() - 0.5),
                        target: () => focusSummit(m)
                    };
                });
            } else {
                const shuffled = [...COUNTRIES_DATA].sort(() => Math.random() - 0.5).slice(0, 5);
                questions = shuffled.map(c => {
                    const others = COUNTRIES_DATA.filter(x => x.name !== c.name).sort(() => Math.random() - 0.5);
                    let qText, correct, opts;
                    if (category === 'capitals') {
                        qText = `What is the capital city of ${c.flag || '🌐'} ${c.name}?`;
                        correct = c.capital;
                        opts = [c.capital, others[0].capital, others[1].capital, others[2].capital];
                    } else if (category === 'continents') {
                        qText = `Which continent is ${c.flag || '🌐'} ${c.name} located in?`;
                        correct = c.continent;
                        opts = ["Asia", "Europe", "Africa", "South America", "North America", "Oceania"].sort(() => Math.random() - 0.5).slice(0, 4);
                        if (!opts.includes(c.continent)) opts[0] = c.continent;
                    } else {
                        qText = `Which country does this flag belong to? ${c.flag}`;
                        correct = c.name;
                        opts = [c.name, others[0].name, others[1].name, others[2].name];
                    }
                    return {
                        qText,
                        correct,
                        opts: opts.sort(() => Math.random() - 0.5),
                        target: () => focusCountry(c)
                    };
                });
            }

            currentQ = 0; score = 0;
            document.getElementById('quiz-setup').classList.add('hidden');
            document.getElementById('quiz-game').classList.remove('hidden');
            showQuestion();
        });

        document.getElementById('retry-quiz').addEventListener('click', () => {
            document.getElementById('quiz-results').classList.add('hidden');
            document.getElementById('quiz-setup').classList.remove('hidden');
        });

        function showQuestion() {
            if (currentQ >= questions.length) {
                document.getElementById('quiz-game').classList.add('hidden');
                document.getElementById('quiz-results').classList.remove('hidden');
                document.getElementById('results-score').textContent = `${score}/${questions.length}`;
                document.getElementById('results-message').textContent = score >= 4
                    ? "🌟 Master of Geography! You know the Earth's countries, cities, and borders inside out!"
                    : "📚 Good effort! Keep exploring cities, straits, and summits on the globe!";
                return;
            }

            const q = questions[currentQ];
            document.getElementById('quiz-question-num').textContent = `Question ${currentQ + 1}/${questions.length}`;
            document.getElementById('quiz-score').textContent = `Score: ${score}`;
            document.getElementById('quiz-question').textContent = q.qText;

            const ansBox = document.getElementById('quiz-answers');
            ansBox.innerHTML = q.opts.map(opt => `<button class="quiz-answer-btn" data-val="${opt}">${opt}</button>`).join('');

            const timerBar = document.getElementById('timer-bar');
            timerBar.style.width = '100%';
            let timeLeft = 100;
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                timeLeft -= 2;
                timerBar.style.width = `${timeLeft}%`;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    revealAnswer(null, q);
                }
            }, 150);

            ansBox.querySelectorAll('.quiz-answer-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    clearInterval(timerInterval);
                    revealAnswer(btn, q);
                });
            });
        }

        function revealAnswer(clickedBtn, q) {
            const ansBox = document.getElementById('quiz-answers');
            ansBox.querySelectorAll('.quiz-answer-btn').forEach(b => {
                b.disabled = true;
                if (b.dataset.val === q.correct) b.classList.add('correct');
            });

            if (clickedBtn && clickedBtn.dataset.val === q.correct) {
                score++;
                if (q.target) q.target();
            } else if (clickedBtn) {
                clickedBtn.classList.add('wrong');
            }

            setTimeout(() => {
                currentQ++;
                showQuestion();
            }, 1400);
        }
    }

    // Startup
    window.addEventListener('DOMContentLoaded', () => {
        initGlobe();
        setupEventListeners();
    });

})();
