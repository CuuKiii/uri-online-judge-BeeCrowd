var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const arroz = parseInt(lines.shift());

for(let i = 0; i < arroz; i++){
  let insect = parseInt(lines.shift());
  insect <= 8000 ? console.log("Inseto!") : console.log("Mais de 8000!");
}
