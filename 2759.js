var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let array = [];

for(let i = 0; i < 3; i++){
  array.push(lines.shift().trim());
}

console.log(`A = ${array[0]}, B = ${array[1]}, C = ${array[2]}\nA = ${array[1]}, B = ${array[2]}, C = ${array[0]}\nA = ${array[2]}, B = ${array[0]}, C = ${array[1]}`)
