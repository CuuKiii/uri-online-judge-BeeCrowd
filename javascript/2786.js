var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const W = parseInt(prompt());
const H = parseInt(prompt());

console.log(W * H + (W - 1) * (H - 1));
console.log(2 * H + 2 * W - 4);
