var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [A, B] = lines.shift().split(" ");

console.log(`${(parseInt(B) / (parseInt(A) + 2)).toFixed(2)}`); 
