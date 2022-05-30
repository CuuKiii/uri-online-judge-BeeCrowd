var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var treasure = [];

while (true) {
  var jewel = prompt();
  if (jewel == "") {
    break;
  }

  if (treasure.includes(jewel) == false) {
    treasure.push(jewel);
  }
}

console.log(treasure.length);
