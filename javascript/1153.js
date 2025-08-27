var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const arroz = parseInt(lines.shift());
let feijao = 1;

for(let i = 1; i < arroz; i++ ){
  feijao *= (arroz + 1) - i;
}
console.log(feijao);
