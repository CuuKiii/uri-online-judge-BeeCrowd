var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Math.max(
  ...lines.map((value) =>
    value.split(' ').reduce((acc, curr) => acc + Number(curr), 0)
  )
);

console.log(`${n} = ${n.toString(2)}`);
