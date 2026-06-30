import os
import re

dir_path = r'c:\Users\dell\OneDrive\Desktop\Moiz Projects\TransMEdex04\TransMEdex\apps\web\src'
app_jsx_path = os.path.join(dir_path, 'App.jsx')

with open(app_jsx_path, 'r', encoding='utf-8') as f:
    app_jsx = f.read()

# Extract all Route paths
# <Route path="/something" ... />
defined_routes = set()
for match in re.finditer(r'<Route\s+path=[\'"]([^\'"]+)[\'"]', app_jsx):
    defined_routes.add(match.group(1))

# Extract all links
links = set()
pattern = re.compile(r'to=[\'"]([^\'"]+)[\'"]|href=[\'"]([^\'"]+)[\'"]')

for root, _, files in os.walk(dir_path):
    for f in files:
        if f.endswith('.jsx'):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                for match in pattern.finditer(content):
                    link = match.group(1) or match.group(2)
                    if link and link.startswith('/'): # only internal links
                        links.add(link)

print("Defined routes:")
print(sorted(defined_routes))
print("\nUsed links:")
print(sorted(links))

print("\nMissing routes:")
missing = set()
for link in links:
    # Some links might have hash e.g. /contact#form
    base_link = link.split('#')[0]
    
    # Check if base_link matches any defined route directly
    if base_link in defined_routes:
        continue
    
    # Check for dynamic routes like /specialties/:slug
    matched = False
    for route in defined_routes:
        if ':' in route:
            regex_route = re.sub(r':[^/]+', '[^/]+', route)
            if re.match(r'^' + regex_route + r'$', base_link):
                matched = True
                break
    
    if not matched:
        missing.add(link)

for m in sorted(missing):
    print(m)

