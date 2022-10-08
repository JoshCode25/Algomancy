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
fs.readFile('./raw/Aggressive One.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
});

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

// const aggressiveOne = require('./raw/Aggressive One.json');
// console.log(aggressiveOne.name);

fs.readdir('./raw/', 'utf8', function (err, files) {
    if (err) {
        return console.log('29: ', err);
    }
    files.forEach((element, index) => {

        fs.readFile(`./raw/${element}`, 'utf8', function(err, data) {
            if (err) {
                return console.log('38: ', err);
            }
            if (index < 3) {
              let info = JSON.parse(data);
              let {name, power, toughness, cost, type, text} = info;
              let total_cost = parseInt((info.total_cost) ? info.total_cost : cost.length, 10);
              let factions = setFactions(cost);
              let details = '';
              let revision_date_time = new Date();
              let imgUrl = `../Artwork/${name}.jpg`

              compiledData[`${name}`] = 
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

              console.log(factions);
              console.log(compiledData);
            }
        })        
    });
});