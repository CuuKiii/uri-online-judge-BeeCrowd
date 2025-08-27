var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  const actual = lines[i].replace(/[^a-z]/gi, '');
  const letters = [...new Set(actual)].length;

  if (letters === 26) {
    console.log('frase completa');
  } else if (letters >= 13) {
    console.log('frase quase completa');
  } else {
    console.log('frase mal elaborada');
  }
}
