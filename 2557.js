var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; lines[i]; i += 1) {
  const [a, b, c] = lines[i].split(/\+|=/);

  if (/[^0-9]/.test(a)) console.log(c - b);
  else if (/[^0-9]/.test(b)) console.log(c - a);
  else console.log(+a + +b);
}
