var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for (let i = 1; i <= n; i++) {
  const nums = lines[i].match(/\d+/g).reduce((acc, curr) => acc + +curr, 0);
  console.log(nums);
}
