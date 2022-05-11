var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const num = prompt().split(".").map(Number);
console.log(num[1] + "." + num[0]);
