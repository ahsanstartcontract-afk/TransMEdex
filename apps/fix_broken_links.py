import os
import re

dir_path = r'c:\Users\dell\OneDrive\Desktop\Moiz Projects\TransMEdex04\TransMEdex\apps\web\src'

def replace_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    # Footer fixes & general missing routes
    new_content = re.sub(r'to="/blog"', r'to="/resources/blog"', new_content)
    new_content = re.sub(r'to="/case-studies"', r'to="/resources/case-studies"', new_content)
    new_content = re.sub(r'to="/infographics"', r'to="/resources/infographics"', new_content)
    new_content = re.sub(r'to="/privacy-policy"', r'to="/resources/privacy-policy"', new_content)
    new_content = re.sub(r'to="/terms-of-service"', r'to="/resources/terms-of-service"', new_content)
    new_content = re.sub(r'to="/services/mips"', r'to="/services/mips-consulting"', new_content)
    
    # Header fixes for to="#"
    if file_path.endswith('Header.jsx'):
        new_content = new_content.replace('label="Who We Serve" to="#"', 'label="Who We Serve" to="/who-we-serve"')
        new_content = new_content.replace('label="Resources" to="#"', 'label="Resources" to="/resources"')

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(('.jsx', '.js')):
            replace_in_file(os.path.join(root, file))
