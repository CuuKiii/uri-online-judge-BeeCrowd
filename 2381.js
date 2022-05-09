var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [n, res] = lines[0].split(' ').map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(lines[i]);
}

console.log(arr.sort((a, b) => a.localeCompare(b))[res - 1]);
