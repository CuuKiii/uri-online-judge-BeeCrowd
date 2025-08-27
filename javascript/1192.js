var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);
for (let i = 1; i <= n; i += 1) {
  let [a, l, b] = lines[i].split('');
  (a = Number(a)), (b = Number(b));

  if (a === b) {
    console.log(b * a);
  } else if (l.toUpperCase() === l) {
    console.log(b - a);
  } else {
    console.log(a + b);
  }
}
