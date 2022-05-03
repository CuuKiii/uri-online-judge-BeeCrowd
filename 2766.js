var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let array = [];

for(let i = 0; i < 10; i++){
  array.push(lines.shift().trim());
}

console.log(`${array[2]}\n${array[6]}\n${array[8]}`);
