import json, re

with open('countries.geojson', encoding='utf-8') as f:
    geo = json.load(f)

with open('countries-data.js', encoding='utf-8') as f:
    raw = f.read()

m = re.search(r'const COUNTRIES_DATA\s*=\s*(\[.*?\]);', raw, re.DOTALL)
cdata = json.loads(m.group(1))

def find_country(props):
    admin = (props.get('ADMIN') or props.get('NAME') or '').strip().lower()
    iso2 = (props.get('ISO_A2') or '').strip().upper()
    iso3 = (props.get('ISO_A3') or '').strip().upper()
    sov = (props.get('SOVEREIGNT') or '').strip().lower()

    # 1. name match
    for c in cdata:
        if c['name'].lower() == admin: return c
    # 2. iso2
    if iso2 and iso2 != '-99':
        for c in cdata:
            if c.get('code', '').upper() == iso2: return c
    # 3. iso3
    if iso3 and iso3 != '-99':
        for c in cdata:
            if c.get('iso3', '').upper() == iso3: return c
    # 4. alt
    for c in cdata:
        if any(a.lower() == admin or a.lower() == sov for a in c.get('alt', [])):
            return c
    # 5. sov
    if sov:
        for c in cdata:
            if c['name'].lower() == sov: return c
    # 6. substring
    for c in cdata:
        c_low = c['name'].lower()
        if len(c_low) > 3 and (c_low in admin or admin in c_low):
            return c
    # 7. alt substring
    for c in cdata:
        for a in c.get('alt', []):
            a_low = a.lower()
            if len(a_low) > 3 and (a_low in admin or admin in a_low):
                return c
    return None

missing = []
field_issues = []
for feat in geo['features']:
    props = feat['properties']
    match = find_country(props)
    name = props.get('ADMIN') or props.get('NAME')
    continent = props.get('CONTINENT')
    if not match:
        missing.append((name, continent, props.get('ISO_A2'), props.get('ISO_A3')))
    else:
        if not match.get('capital') or match['capital'] == 'N/A':
            field_issues.append((name, 'capital', match['name']))
        if not match.get('currency') or match['currency'] == 'N/A':
            field_issues.append((name, 'currency', match['name']))
        if not match.get('languages') or match['languages'] == 'N/A':
            field_issues.append((name, 'languages', match['name']))

print(f"Total GeoJSON features: {len(geo['features'])}")
print(f"Missing count: {len(missing)}")
if missing:
    print("Missing countries:", missing)
print(f"Field issues count: {len(field_issues)}")
if field_issues:
    print("Field issues:", field_issues)
