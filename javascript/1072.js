var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = lines.shift();
let Y = lines.shift();
let i = 0;
let out = 0;
let In = 0; 

while(i < X){
  Y <= 20 && Y >= 10 ? In++ : out++;
  i++;
  Y = lines.shift();
  }

console.log(`${In} in`);
console.log(`${out} out`);
