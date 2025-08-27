var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const N = parseInt(prompt());

var P = (N / Math.log(N)).toFixed(1);
var M = ((1.25506 * N) / Math.log(N)).toFixed(1);

console.log(P + " " + M);
