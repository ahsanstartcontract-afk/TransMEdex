const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');

function removeHelmetTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  
  // Remove import
  content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet['"];?\n?/g, '');
  
  // Remove <Helmet>...</Helmet> block
  content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n?/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.jsx')) {
      removeHelmetTags(fullPath);
    }
  }
}

processDir(pagesDir);
console.log('Finished removing hardcoded Helmet tags from pages.');
