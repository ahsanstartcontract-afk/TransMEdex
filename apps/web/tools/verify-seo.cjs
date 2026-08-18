const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../../../dist/apps/web');

const routesToCheck = [
  { path: 'index.html', route: '/' },
  { path: 'contact/index.html', route: '/contact' },
  { path: 'services/index.html', route: '/services' },
  { path: 'services/medical-billing/index.html', route: '/services/medical-billing' },
  { path: 'emr/epic/index.html', route: '/emr/epic' },
  { path: 'specialties/cardiology/index.html', route: '/specialties/cardiology' },
  { path: 'states/texas/index.html', route: '/states/texas' },
  { path: 'who-we-serve/medical-group-practices/index.html', route: '/who-we-serve/medical-group-practices' },
  { path: 'resources/company/index.html', route: '/resources/company' },
  { path: 'pricing/index.html', route: '/pricing' },
];

let passed = 0;
let failed = 0;

for (const r of routesToCheck) {
  const filePath = path.join(distDir, r.path);
  if (!fs.existsSync(filePath)) {
    console.log(`FAIL [${r.route}] File not found: ${r.path}`);
    failed++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const checks = [];

  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  if (titleMatch && titleMatch[1] && !titleMatch[1].includes('TransMedex | Medical Billing Services Company in the USA') || r.route === '/') {
    checks.push(`Title: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  }
  if (!titleMatch || !titleMatch[1]) {
    checks.push('FAIL: No <title> found');
    failed++;
    continue;
  }

  // Meta description
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  
  // Canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  
  // OG tags
  const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]*)"/);
  const ogDescMatch = html.match(/<meta property="og:description" content="([^"]*)"/);
  const ogImageMatch = html.match(/<meta property="og:image" content="([^"]*)"/);
  
  // Twitter
  const twitterMatch = html.match(/<meta name="twitter:card" content="([^"]*)"/);
  
  // JSON-LD
  const jsonLdMatch = html.match(/application\/ld\+json/);
  
  // Robots
  const robotsMatch = html.match(/<meta name="robots" content="([^"]*)"/);

  // H1
  const h1Match = html.match(/<h1[^>]*>([^<]*)</);

  const results = {
    title: titleMatch ? titleMatch[1] : 'MISSING',
    description: descMatch ? 'YES' : 'MISSING',
    canonical: canonicalMatch ? canonicalMatch[1] : 'MISSING',
    ogTitle: ogTitleMatch ? 'YES' : 'MISSING',
    ogDesc: ogDescMatch ? 'YES' : 'MISSING',
    ogImage: ogImageMatch ? 'YES' : 'MISSING',
    twitter: twitterMatch ? twitterMatch[1] : 'MISSING',
    jsonLd: jsonLdMatch ? 'PRESENT' : 'MISSING',
    robots: robotsMatch ? robotsMatch[1] : 'MISSING',
    h1: h1Match ? h1Match[1].substring(0, 60) : 'MISSING',
  };

  const hasFail = Object.values(results).some(v => v === 'MISSING');
  
  if (hasFail) {
    console.log(`WARN [${r.route}]`);
    failed++;
  } else {
    console.log(`PASS [${r.route}]`);
    passed++;
  }
  
  console.log(`  Title: ${results.title}`);
  console.log(`  Desc: ${results.description} | Canonical: ${results.canonical}`);
  console.log(`  OG(title/desc/img): ${results.ogTitle}/${results.ogDesc}/${results.ogImage}`);
  console.log(`  Twitter: ${results.twitter} | JSON-LD: ${results.jsonLd} | Robots: ${results.robots}`);
  console.log(`  H1: ${results.h1}`);
  console.log('');
}

// Check robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  console.log('--- robots.txt ---');
  console.log(robotsContent);
} else {
  console.log('FAIL: robots.txt not found in dist');
}

// Check sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urlCount = (sitemapContent.match(/<url>/g) || []).length;
  console.log(`--- sitemap.xml --- (${urlCount} URLs)`);
  console.log(sitemapContent.substring(0, 500));
} else {
  console.log('FAIL: sitemap.xml not found in dist');
}

console.log(`\n=== SUMMARY: ${passed} passed, ${failed} warnings/fails ===`);
