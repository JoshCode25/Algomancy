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
fs.readFile('../Aggressive One.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

const aggressiveOne = require('../Aggressive One.json');
console.log(aggressiveOne.name);

fs.readdir('../', 'utf8', function (err, files) {
    if (err) {
        return console.log(err);
    }
    files.forEach(element => {
        console.log(element);
        fs.readFile(element, 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data.name);
        })        
    });
});