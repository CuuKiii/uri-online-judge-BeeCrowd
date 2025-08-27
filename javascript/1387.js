var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [a, b] = prompt().split(" ").map(Number);

while (a !== 0 || b !== 0) {
  console.log(a + b);

  [a, b] = prompt().split(" ").map(Number);
}
