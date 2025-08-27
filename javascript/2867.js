var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var [base, exp] = prompt().split(" ").map(Number);

  var digits = Math.trunc(Math.log10(base) * exp);

  console.log(digits + 1);
}
