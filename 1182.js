var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const contador = parseInt(lines.shift());

const operacao = lines.shift();

let soma = 0;

let resultado = 0;

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    const n = parseInt(lines.shift());
    if (j === contador) soma += n;
  }
}

if (operacao === 'S') {
  resultado = soma;
} else {
  resultado = soma / 12;
}

console.log(resultado.toFixed(1));
