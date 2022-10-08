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
            if (index < 300) {
              let info = JSON.parse(data);
              let {name, power, toughness, cost, total_cost, type, text} = info;
              let factions = setFactions(cost);

            }
        })        
    });
});