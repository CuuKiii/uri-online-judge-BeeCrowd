var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let numero = parseInt(lines.shift());

const arabicos = [900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanos = ['CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

let i = 0;
let resultado = '';

while (numero > 0) {
  if (numero >= arabicos[i]) {
    numero -= arabicos[i];
    resultado += romanos[i];
  } else {
    i++;
  }
}

console.log(resultado);


