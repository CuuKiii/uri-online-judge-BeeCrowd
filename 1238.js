var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);
for (let i = 1; i <= n; i += 1) {
  const [a, b] = lines[i].split(' ');
  const maxLength = Math.max(a.length, b.length);

  const arr = [];

  for (let j = 0; j < maxLength; j += 1) {
    if (a[j]) arr.push(a[j]);
    if (b[j]) arr.push(b[j]);
  }

  console.log(arr.join(''));
}
