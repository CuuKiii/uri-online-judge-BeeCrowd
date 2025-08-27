var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();
let natal = "Feliz nat"
for(let i = 0; i < number; i++){
  natal += "a";
}

console.log(natal + "l!");
