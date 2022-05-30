var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const repetitions = parseInt(prompt());
var SR10 = 3;
var fraction = 0;

for (let i = 0; i < repetitions; i++) {
  fraction = 1 / (6 + fraction);
}
SR10 = SR10 + fraction;

console.log(SR10.toFixed(10));
