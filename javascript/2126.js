var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0, j = 1; lines[i]; i += 2) {
  const sub = lines[i];
  const str = lines[i + 1];

  const reg = new RegExp(`${sub}`, 'g');
  const response = str.match(reg);

  if (!response) {
    console.log(`Caso #${j++}:`);
    console.log(`Nao existe subsequencia`);
    console.log(``)
  } else {
    console.log(`Caso #${j++}:`);
    console.log(`Qtd.Subsequencias: ${response.length}`);
    console.log(`Pos: ${str.lastIndexOf(response[0]) + 1}`);
    console.log(``)
  }
}
