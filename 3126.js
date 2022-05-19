var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = lines[1]
  .split(' ')
  .map(Number)
  .filter((num) => num === 1);

console.log(n.length);
