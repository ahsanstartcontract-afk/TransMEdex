import os
import re

files = [
    'EpicPage.jsx',
    'AthenahealthPage.jsx',
    'AdvancedMDPage.jsx',
    'ICANotesPage.jsx',
    'NextGenPage.jsx',
    'CareCloudPage.jsx'
]

dir_path = r'c:\Users\dell\OneDrive\Desktop\Moiz Projects\TransMEdex04\TransMEdex\apps\web\src\pages'

for file_name in files:
    file_path = os.path.join(dir_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the block starting with <div className="relative z-10 rounded-[2rem] ... that contains the <form>
    pattern = re.compile(r'<div className="relative z-10 rounded-\[2rem\][^>]*>.*?<form.*?</form>\s*</div>', re.DOTALL)
    
    new_content = pattern.sub('', content)
    
    # Remove the grid columns specification that might leave empty space
    grid_pattern = re.compile(r'xl:grid-cols-\[[^\]]+\]')
    new_content = grid_pattern.sub('', new_content)

    lg_grid_pattern = re.compile(r'lg:grid-cols-\[[^\]]+\]')
    new_content = lg_grid_pattern.sub('', new_content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Processed {file_name}")
