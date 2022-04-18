var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const mãe = parseInt(lines.shift());
let filhos = [];
for(let i = 0; i < 2; i++){
  filhos.push(parseInt(lines.shift()))
}

const filhoC = mãe - (filhos[0] + filhos[1]);
filhos.push(filhoC);
filhos.sort((a,b) => a - b).reverse();
console.log(filhos[0]);
