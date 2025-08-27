var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for(let i = 1; i <= n * 2; i += 2) {
  const a = lines[i];
  const b = lines[i+1];

  let str = "";

  for(let j = 0; j < a.length; j += 2) {
    str += a.substring(j, j + 2) + b.substring(j, j + 2);
  }

  console.log(str);
} 
