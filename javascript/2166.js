var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const repetitions = parseInt(prompt());
var fraction = 0;
var SR2;


for (let i = 0; i < repetitions; i++) {
  fraction = 1 / (2 + fraction);
}

SR2 = 1 + fraction;
console.log(SR2.toFixed(10));
