var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();
let cont = 0;
for(let i = 0; i < 6; i++){
  if(number > 0) cont++;
  number = lines.shift();
}
console.log(`${cont} valores positivos`);
