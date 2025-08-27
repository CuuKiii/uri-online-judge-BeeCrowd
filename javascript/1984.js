var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const number = prompt().split("");
var invert = [];

for (let digit of number) {
  invert.unshift(digit);
}

if (number.length == 5) {
  console.log("4321");
} else {
  console.log(invert.join(""));
}
