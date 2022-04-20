var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const x = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')
  .map(x => Number(x))
  .map(x => x > 0 ? x : 1);

for (let i = 0; i < 10; i++) {
  console.log(`X[${i}] = ${x[i]}`);
}
