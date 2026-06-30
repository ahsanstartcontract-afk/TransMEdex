import os
import re

dir_path = r'c:\Users\dell\OneDrive\Desktop\Moiz Projects\TransMEdex04\TransMEdex\apps\web\src'

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
                    if link == '#' or link == '':
                        links.add(f"{f}: {link}")

print("Broken links:")
for l in sorted(links):
    print(l)
