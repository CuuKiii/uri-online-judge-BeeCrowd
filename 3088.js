var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; lines[i]; i += 1) {
  const actual = lines[i];
  console.log(actual.replace(/\s(?=,|\.)/g, ''));
}
