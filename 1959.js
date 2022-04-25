var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [a, b] = lines.shift().split(" ");

console.log(a * b);
