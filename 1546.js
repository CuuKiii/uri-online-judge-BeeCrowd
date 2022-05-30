var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const obj = { 1: 'Rolien', 2: 'Naej', 3: 'Elehcim', 4: 'Odranoel' };
const n = Number(lines[0]);
let v = Number(lines[1]);
let position = 2;
for (let i = 0; i < n; i += 1) {
  while (v >= 0) {
    if (v === 0) {
      v = Number(lines[position]);
      position++;
    }
    if (lines[position]) {
      console.log(obj[lines[position]]);
    }
    position++;
    v--;
  }
}
