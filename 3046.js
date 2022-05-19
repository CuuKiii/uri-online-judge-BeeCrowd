var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines);

let result = ((N+1)*(N+2))/2;

console.log(result);
