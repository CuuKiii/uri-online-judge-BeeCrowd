var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

let evens = [];
let odds = [];

for (let i = 1; i <= n; i += 1) {
  lines[i] % 2 !== 0 ? odds.push(lines[i]) : evens.push(lines[i]);
}

evens.sort((a, b) => a - b).forEach((num) => console.log(num));
odds.sort((a, b) => b - a).forEach((num) => console.log(num));
