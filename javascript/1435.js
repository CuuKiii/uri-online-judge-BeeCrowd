var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let contador = parseInt(lines.shift());
let vetor = [];
let matriz = [];
while (contador !== 0) {
  matriz = new Array(contador);
  for (let i = 0; i < contador / 2; i++) {
    vetor = new Array(contador);
    for (let j = 0; j < contador / 2; j++) {
      const value = Math.min(i, j) + 1;
      vetor[j] = value < 10 ? ` ${value}` : `${value}`; 
      vetor[contador - 1 - j] = vetor[j];
    }
    matriz[i] = ` ${vetor.join('  ')}`;
    matriz[contador - 1 - i] = matriz[i];
  }
  console.log(`${matriz.join('\n')}`);

  contador = parseInt(lines.shift());
  console.log('');
}
