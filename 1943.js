var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

const m = 'Top ';

if (n === 1) {
  console.log(m + '1');
} else if (n <= 3) {
  console.log(m + '3');
} else if (n <= 5) {
  console.log(m + '5');
} else if (n <= 10) {
  console.log(m + '10');
} else if (n <= 25) {
  console.log(m + '25');
} else if (n <= 50) {
  console.log(m + '50');
} else {
  console.log(m + '100');
}
