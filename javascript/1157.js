var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());

for(let i = 1; i <= number; i++){
  if(number % i == 0) console.log(i);
}
