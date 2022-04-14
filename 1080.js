var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let maior = number;
let posição = 1;
for (let i = 1; i <= 100; i++){
  if (maior < number){
    maior = number;
    posição = i;
  }
  number = parseInt(lines.shift());
}
console.log(`${maior}\n${posição}`);
