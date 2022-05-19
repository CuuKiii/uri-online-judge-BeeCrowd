var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  if (/[bcdfghjklmnpqrstvxywz]{3,}/ig.test(lines[i])) {
    console.log(`${lines[i]} nao eh facil`);
  } else {
    console.log(`${lines[i]} eh facil`);
  }
}
