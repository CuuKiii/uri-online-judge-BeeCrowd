var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift();
let B = parseInt(lines.shift());
let cont = 0;
for (let i = (B + 1); i < A; i++){
  if (i % 2 != 0) cont+= i;
}
console.log(cont);
