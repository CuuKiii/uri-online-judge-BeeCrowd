var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; lines[i]; i += 1) {
  const word = lines[i];
  const result =
    /[A-Z]/g.test(word) &&
    /[a-z]/g.test(word) &&
    /[0-9]/g.test(word) &&
    word.length >= 6 &&
    word.length <= 32 &&
    word.match(/[^a-zA-Z0-9]/) === null;

  console.log(result ? 'Senha valida.' : 'Senha invalida.');
}
