var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

console.log(`${A % B}`);
