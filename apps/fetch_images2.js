const fs = require('fs');

const stateLandmarks = {
  'Alabama': 'Birmingham, Alabama',
  'Alaska': 'Denali',
  'Arizona': 'Grand Canyon',
  'Arkansas': 'Hot Springs National Park',
  'California': 'Golden Gate Bridge',
  'Colorado': 'Rocky Mountain National Park',
  'Connecticut': 'Yale University',
  'Delaware': 'Rehoboth Beach',
  'Florida': 'Miami Beach, Florida',
  'Georgia': 'Atlanta',
  'Hawaii': 'Waikiki',
  'Idaho': 'Shoshone Falls',
  'Illinois': 'Millennium Park',
  'Indiana': 'Indianapolis Motor Speedway',
  'Iowa': 'Des Moines, Iowa',
  'Kansas': 'Monument Rocks (Kansas)',
  'Kentucky': 'Mammoth Cave National Park',
  'Louisiana': 'French Quarter',
  'Maine': 'Acadia National Park',
  'Maryland': 'Inner Harbor',
  'Massachusetts': 'Faneuil Hall',
  'Michigan': 'Mackinac Bridge',
  'Minnesota': 'Mall of America',
  'Mississippi': 'Vicksburg National Military Park',
  'Missouri': 'Gateway Arch',
  'Montana': 'Glacier National Park (U.S.)',
  'Nebraska': 'Chimney Rock National Historic Site',
  'Nevada': 'Las Vegas Strip',
  'New Hampshire': 'Mount Washington (New Hampshire)',
  'New Jersey': 'Atlantic City Boardwalk',
  'New Mexico': 'Carlsbad Caverns National Park',
  'New York': 'Statue of Liberty',
  'North Carolina': 'Biltmore Estate',
  'North Dakota': 'Theodore Roosevelt National Park',
  'Ohio': 'Rock and Roll Hall of Fame',
  'Oklahoma': 'U.S. Route 66',
  'Oregon': 'Crater Lake',
  'Pennsylvania': 'Independence Hall',
  'Rhode Island': 'The Breakers',
  'South Carolina': 'Charleston, South Carolina',
  'South Dakota': 'Mount Rushmore',
  'Tennessee': 'Great Smoky Mountains National Park',
  'Texas': 'Alamo Mission in San Antonio',
  'Utah': 'Zion National Park',
  'Vermont': 'Stowe, Vermont',
  'Virginia': 'Mount Vernon',
  'Washington': 'Space Needle',
  'West Virginia': 'New River Gorge Bridge',
  'Wisconsin': 'Wisconsin Dells, Wisconsin',
  'Wyoming': 'Yellowstone National Park'
};

const states = Object.keys(stateLandmarks);

async function run() {
  const images = {};
  for (let i = 0; i < states.length; i += 10) {
    const batchStates = states.slice(i, i + 10);
    const batchLandmarks = batchStates.map(s => stateLandmarks[s]).join('|');
    const url = 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=' + encodeURIComponent(batchLandmarks) + '&pithumbsize=600&format=json';
    const res = await fetch(url);
    const data = await res.json();
    const pages = data.query.pages;
    
    // map backwards
    for (const id in pages) {
      if (pages[id].thumbnail) {
        // find which state this landmark belongs to
        const title = pages[id].title;
        const state = Object.keys(stateLandmarks).find(k => stateLandmarks[k] === title);
        if (state) {
          images[state] = pages[id].thumbnail.source;
        }
      }
    }
  }

  const finalMap = states.map(s => {
    return `  '${s}': '${images[s] || 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80'}'`;
  });

  const content = `const stateImages = {\n${finalMap.join(',\n')}\n};`;
  console.log(content);
  fs.writeFileSync('stateImages2.txt', content);
}

run();
