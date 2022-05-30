var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for(let i = 0; lines[i]; i += 2) {
  const letters = lines[i]
  const word = lines[i+1]

  const reg = new RegExp(`[^${letters}]`, 'g')
  console.log(word.replace(reg, '').length)
}
