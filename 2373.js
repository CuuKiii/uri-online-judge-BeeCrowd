var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0])
let brokenGlasses = 0;
for(let i = 1; i <= n; i += 1) {
  const [bear, glass] = lines[i].split(' ')

  if(Number(bear) > Number(glass)) brokenGlasses += Number(glass);
}

console.log(brokenGlasses)
