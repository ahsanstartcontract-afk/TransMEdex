const fs = require('fs');
const path = require('path');
const dir = 'd:/Transmedex1/apps/web/src/pages';

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else if (filePath.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = getFiles(dir);

let changedFiles = 0;

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Match any Call button with any phone number
  const heroButtonRegex = /<Button asChild size="lg" variant="outline">\s*<a href="tel:[^"]+">Call [^<]+<\/a>\s*<\/Button>/g;
  
  content = content.replace(
    heroButtonRegex,
    (match) => match.replace('<Button asChild size="lg" variant="outline">', '<Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">')
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    changedFiles++;
    console.log('Fixed ' + path.basename(filePath));
  }
}
console.log('Total files fixed: ' + changedFiles);
