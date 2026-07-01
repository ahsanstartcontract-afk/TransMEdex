const fs = require('fs');

const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

async function run() {
  const images = {};
  for (let i = 0; i < states.length; i += 10) {
    const batch = states.slice(i, i + 10).join('|');
    const url = 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=' + encodeURIComponent(batch) + '&pithumbsize=600&format=json';
    const res = await fetch(url);
    const data = await res.json();
    const pages = data.query.pages;
    for (const id in pages) {
      if (pages[id].thumbnail) {
        images[pages[id].title] = pages[id].thumbnail.source;
      }
    }
  }

  const finalMap = states.map(s => {
    return `  '${s}': '${images[s] || 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80'}'`;
  });

  const content = `const stateImages = {\n${finalMap.join(',\n')}\n};`;
  console.log(content);
  fs.writeFileSync('stateImages.txt', content);
}

run();
