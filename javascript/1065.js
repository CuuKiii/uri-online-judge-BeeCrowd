var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();
let cont = 0;
let i = 0;
while(i < 5){
  if(number % 2 === 0) cont++;
  i++
  number = lines.shift();
}
console.log(`${cont} valores pares`);
