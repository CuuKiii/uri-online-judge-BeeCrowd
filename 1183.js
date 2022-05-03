var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const operacao = lines.shift();

let soma = 0;

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    const n = parseFloat(lines.shift());
    if (j > i) soma += n;
  }
}

let resultado = 0;

if (operacao === 'S') {
  resultado = soma;
} else {
  resultado = soma / ((144 - 12) / 2);
}

console.log(resultado.toFixed(1));
