var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);
for (let i = 1; i <= n; i++) {
  const actual = lines[i];
  const f = lines[i].slice(0, actual.length / 2);
  const s = lines[i].slice(actual.length / 2, actual.length);

  console.log(f.split('').reverse().join('') + s.split('').reverse().join(''));
}
