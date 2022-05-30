var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0; lines[i]; i += 1) {
  const phrase = lines[i].toLowerCase().split(' ').map(v => v[0]).join('')
  const n = phrase.match(/(.)\1+/g)
  console.log(!n ? 0 : n.length)
}
