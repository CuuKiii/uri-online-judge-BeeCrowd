var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseFloat(lines.shift());

console.log((2 * 3.14 * number).toFixed(2)); 
