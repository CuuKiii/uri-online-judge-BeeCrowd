
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; lines[i]; i += 1) {
  console.log(lines[i].replace(/(.+)\1+/g, '$1'));
}
