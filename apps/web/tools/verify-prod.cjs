const baseUrl = 'https://www.transmedex.org';
const routes = [
  '/',
  '/contact',
  '/services/medical-billing',
  '/emr/epic'
];

async function checkUrl(route) {
  try {
    const res = await fetch(`${baseUrl}${route}`);
    const html = await res.text();

    const title = html.match(/<title>([^<]*)<\/title>/);
    const desc = html.match(/<meta name="description" content="([^"]*)"/);
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/);
    const ogTitle = html.match(/<meta property="og:title" content="([^"]*)"/);
    const jsonLd = html.match(/application\/ld\+json/);
    
    // To confirm actual page content before JS
    const rootContent = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    const hasContent = rootContent && rootContent[1].trim().length > 100;

    console.log(`Route: ${route}`);
    console.log(`  Raw HTML Content Generated: ${hasContent ? 'PASS' : 'FAIL'}`);
    console.log(`  Title: ${title ? 'PASS (' + title[1] + ')' : 'FAIL'}`);
    console.log(`  Description: ${desc ? 'PASS' : 'FAIL'}`);
    console.log(`  Canonical: ${canonical ? 'PASS (' + canonical[1] + ')' : 'FAIL'}`);
    console.log(`  OG Tags: ${ogTitle ? 'PASS' : 'FAIL'}`);
    console.log(`  JSON-LD: ${jsonLd ? 'PASS' : 'FAIL'}`);
    console.log('');
  } catch (e) {
    console.log(`Route: ${route} - FETCH FAILED: ${e.message}\n`);
  }
}

async function run() {
  console.log('--- Production Routes Verification ---');
  for (const r of routes) {
    await checkUrl(r);
  }

  console.log('--- robots.txt Verification ---');
  try {
    const rRes = await fetch(`${baseUrl}/robots.txt`);
    const rText = await rRes.text();
    console.log(rText.includes('User-agent:') ? 'PASS' : 'FAIL: Invalid content');
  } catch(e) { console.log('FAIL: ' + e.message); }

  console.log('--- sitemap.xml Verification ---');
  try {
    const sRes = await fetch(`${baseUrl}/sitemap.xml`);
    const sText = await sRes.text();
    console.log(sText.includes('<urlset') ? 'PASS' : 'FAIL: Invalid content');
  } catch(e) { console.log('FAIL: ' + e.message); }
}

run();
