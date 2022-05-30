var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for(let i = 1; i <= n; i += 1) {
  const s = lines[i].split(' ')
  const result = s.map(v => v[0] || '').filter(v => v).join('');
  console.log(result)
}
