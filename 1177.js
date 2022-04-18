var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
let array = [];
let temp;
let cont = 0;

for(let i = 0; i < 1000; i++){
  if(cont == number){
    cont = 0;
  }
  array.push(cont);
  cont++;
  console.log(`N[${i}] = ${array[i]}`);
}
