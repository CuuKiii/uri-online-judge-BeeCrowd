var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const N = parseInt(prompt());
var term1 = Math.pow((1 + Math.sqrt(5)) / 2, N);
var term2 = Math.pow((1 - Math.sqrt(5)) / 2, N);
var fib = (term1 - term2) / Math.sqrt(5);
console.log(fib.toFixed(1));
