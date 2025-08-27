var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0])

for(let i = 1; i <= n; i += 1) {
  console.log(`resposta ${i}: ${lines[i]}`)
}
