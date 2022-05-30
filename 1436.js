var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  const actual = lines[i].split(' ').map(Number);
  const res = actual.sort((a, b) => a - b)[Math.round(actual.length / 2)];

  console.log(`Case ${i}: ${res}`);
}
