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

fs = require('fs')

const compiledData = {

}

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

async function sortData(element, index) {

  await fs.readFile(`./raw/${element}`, 'utf8', function(err, data) {
    if (err) {
        return console.log('readFile: ', err);
    }

    if (index < 3) {
      let info = JSON.parse(data);
      let {name, power, toughness, cost, type, text} = info;
      let total_cost = parseInt((info.total_cost) ? info.total_cost : cost.length, 10);
      let factions = setFactions(cost);
      let details = '';
      let revision_date_time = new Date();
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
          revision_date_time: revision_date_time
        }
      ];

      console.log('89: ', sortedData);

      return sortedData;
    }
  });
}

function compileData(url) {

    fs.readdirSync(url, 'utf8', function (err, files) {
      if (err) {
          return console.log('29: ', err);
      }

      files.forEach(sortData);     
          
      try {
        console.log(compiledData);
        fs.writeFileSync('./compiledData.json', JSON.stringify(compiledData));
      } catch (err) {
        console.error(err);
      }
  });
}

// compileData('./raw/');
const bonk = sortData('bonk.json', 1)
  .then((data) => console.log('Bonk: ', data));
