const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const fsPromises = require('fs').promises;

const dataArray_All = [];

const factionKey = {
  e: 'earth',
  g: 'wood',
  r: 'fire',
  b: 'water',
  m: 'metal'
}

function setFactions(cost) {
  let factionList = [];
  
  for (let key in factionKey) {
    if (cost.includes(key)) {
      factionList.push(factionKey[key]);
    }
  }

  if (factionList.length === 0) factionList.push('colorless');

  return factionList;
}

async function sortData(element) {

  let data = await fsPromises.readFile(`./raw/${element}`, 'utf8', function(err, data) {
    if (err) {
        return console.log('readFile: ', err);
    }
    return data;
  })

  let {name, power, toughness, cost, type, text} = JSON.parse(data);
  let total_cost = parseInt((data.total_cost) ? data.total_cost : cost.length, 10);
  let factions = setFactions(cost);
  let details = '';
  let imgUrl = `../Artwork/${name}.jpg`

  let sortedData = 
  [
    {
      name: name,
      factions: factions,
      power: power,
      toughness: toughness,
      cost: cost,
      total_cost: total_cost,
      type: type,
      text: text,
      imageUrl: imgUrl,
      details: details,
      revision_date_time: new Date()
    }
  ];

  return sortedData;

}

async function compileData(url) {

  let fileNames = await fsPromises.readdir(url, 'utf8', function (err, files) {
    if (err) {
        return console.log('29: ', err);
    }
  });

  let compiledData = await Promise.all(fileNames.map(async (element) => {
    let sortedData = await sortData(element);

    return sortedData;
  }))

  return compiledData; 
      
}

(async() =>{
  // let bonk = await sortData('bonk.json');
  // console.log('108: ', bonk);
  
  let compiledData = await compileData('./raw');

  try {

    await fsPromises.writeFile('./compiledData.json', JSON.stringify(compiledData));
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
})();