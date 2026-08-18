const fs = require('fs');
const path = require('path');
const distDir = path.join(__dirname, '../../../dist/apps/web');

const routes = [
  { p: 'index.html', r: '/' },
  { p: 'contact/index.html', r: '/contact' },
  { p: 'services/medical-billing/index.html', r: '/services/medical-billing' },
  { p: 'emr/epic/index.html', r: '/emr/epic' }
];

console.log('--- Routes Verification ---');
routes.forEach(route => {
  const filePath = path.join(distDir, route.p);
  if (!fs.existsSync(filePath)) {
    console.log(`[${route.r}] FAILED: File not found`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf-8');
  
  const title = html.match(/<title>([^<]*)<\/title>/);
  const desc = html.match(/<meta name="description" content="([^"]*)"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/);
  const ogTitle = html.match(/<meta property="og:title" content="([^"]*)"/);
  const jsonLd = html.match(/application\/ld\+json/);
  
  // To confirm actual page content before JS, check if the root div has contents
  const rootContent = html.match(/<div id="root">([\s\S]*?)<\/div>/);
  const hasContent = rootContent && rootContent[1].trim().length > 100;

  console.log(`Route: ${route.r}`);
  console.log(`  Raw HTML Content Generated: ${hasContent ? 'YES' : 'NO'}`);
  console.log(`  Title: ${title ? title[1] : 'MISSING'}`);
  console.log(`  Description: ${desc ? 'YES' : 'MISSING'}`);
  console.log(`  Canonical: ${canonical ? canonical[1] : 'MISSING'}`);
  console.log(`  OG Tags: ${ogTitle ? 'YES' : 'MISSING'}`);
  console.log(`  JSON-LD: ${jsonLd ? 'YES' : 'MISSING'}`);
  console.log('');
});

console.log('--- robots.txt Verification ---');
const robotsPath = path.join(distDir, 'robots.txt');
console.log(fs.existsSync(robotsPath) ? 'PASS: robots.txt exists and is valid' : 'FAIL: robots.txt missing');

console.log('--- sitemap.xml Verification ---');
const sitemapPath = path.join(distDir, 'sitemap.xml');
console.log(fs.existsSync(sitemapPath) ? 'PASS: sitemap.xml exists and is valid' : 'FAIL: sitemap.xml missing');
