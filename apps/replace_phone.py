import os
import re

dir_path = r'c:\Users\dell\OneDrive\Desktop\Moiz Projects\TransMEdex04\TransMEdex\apps\web\src'

def replace_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    # Replace tel links
    new_content = re.sub(r'tel:\+16097930400', r'tel:8009660515', new_content)
    
    # Replace display numbers
    new_content = re.sub(r'\+1\s*\(\s*609\s*\)\s*793-0400', '(800) 966-0515', new_content)
    new_content = re.sub(r'\(609\)\s*793-0400', '(800) 966-0515', new_content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(('.jsx', '.js', '.tsx', '.ts')):
            replace_in_file(os.path.join(root, file))

