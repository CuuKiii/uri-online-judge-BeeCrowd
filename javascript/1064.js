var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseFloat(lines.shift());
let cont = 0;
let numbers = 0;
for(let i = 0; i < 6; i++){
  if(number > 0){
    cont++;
    numbers += number;
  }
  number = parseFloat(lines.shift());
}
const media = numbers / cont;

console.log(`${cont} valores positivos\n${media.toFixed(1)}`);
