var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const entrada = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const t = Number(entrada.shift());
let tempo;

for (let i = 0; i < t; i++) {
  let [pa, pb, g1, g2] = entrada.shift().split(' ').map(x => Number(x));
  g1 /= 100;
  g2 /= 100;
  tempo = 'Mais de 1 seculo.';

  for (let j = 1; j < 101; j++) {
    pa += Math.floor(pa * g1);
    pb += Math.floor(pb * g2);

    if (pa > pb) {
      tempo = `${j} anos.`;
      break;
    }
  }

  console.log(tempo);
}
