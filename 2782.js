var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const size = parseInt(prompt());
const sequence = prompt().split(" ").map(Number);
var steps = 0;
var difference;

for (let i = 1; i < size; i++) {
  if (sequence[i] - sequence[i - 1] != difference) {
    difference = sequence[i] - sequence[i - 1];
    steps++;
  }
}

if (size == 1) {
  steps = 1;
}

console.log(steps);
