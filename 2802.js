var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const N = parseInt(prompt());

const vertices = N + (N * (N - 1) * (N - 2) * (N - 3)) / 24;
const edges = (N * (N - 1)) / 2 + (N * (N - 1) * (N - 2) * (N - 3)) / 12 + N;
const areas = 1 + edges - vertices;

console.log(areas);
