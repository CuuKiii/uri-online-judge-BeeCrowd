var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const size = parseInt(prompt());
var fib = [1, 1];

for (let i = 1; i < size; i++) {
  fib.push(fib[i] + fib[i - 1]);
}

fib.length = size;

console.log(fib.reverse().join(" "));
