const fs = require('fs');
const files = [
  'd:/Transmedex1/apps/web/src/pages/NextGenPage.jsx',
  'd:/Transmedex1/apps/web/src/pages/CareCloudPage.jsx',
  'd:/Transmedex1/apps/web/src/pages/AthenahealthPage.jsx',
  'd:/Transmedex1/apps/web/src/pages/AdvancedMDPage.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    'className="rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white hover:bg-white/10"',
    'className="bg-transparent rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-slate-900"'
  );
  fs.writeFileSync(file, content);
  console.log('Fixed ' + file);
});
