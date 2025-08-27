var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  const actual = lines[i];

  if (!/^RA\d{18}$/.test(actual)) {
    console.log('INVALID DATA');
  } else {
    console.log(actual.match(/[1-9](\d+)?/)[0]);
  }
}
