var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const entrada = require('fs').readFileSync('/dev/stdin', 'utf8')
  .split('\n')
  .map(x => Number(x));

const pares = [];
const impares = [];

for (let i = 0; i < 15; i++) {
  const n = entrada.shift();

  if (impares.length == 5) {
      imprimeNumeros(impares, false);
  }
  else if (pares.length == 5) {
      imprimeNumeros(pares, true);
  }

  if (n % 2 === 0) {
      pares.push(n);
  }
  else
  {
      impares.push(n);
  }
}

if (impares.length > 0) {
    imprimeNumeros(impares, false);
}

if (pares.length > 0) {
    imprimeNumeros(pares, true);
}

function imprimeNumeros(numeros, saoPares) {
  for (let i = 0; i < numeros.length; i++) {
    console.log(`${saoPares ? 'par' : 'impar'}[${i}] = ${numeros[i]}`);
  }

  numeros.length = 0;
}
