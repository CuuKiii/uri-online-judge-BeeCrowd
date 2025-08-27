var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const entrada = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');
const a = Number(entrada.shift());
const n = Number(entrada.pop());
let soma = 0;

for (let i = 0; i < n; i++) {
  soma += a + i;
}

console.log(soma);
