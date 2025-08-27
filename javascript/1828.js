var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const contador = parseInt(lines.shift());
const sheldonVence = {
  pedra: ['lagarto', 'tesoura'],
  papel: ['pedra', 'Spock'],
  tesoura: ['papel', 'lagarto'],
  lagarto: ['Spock', 'papel'],
  Spock: ['tesoura', 'pedra']
};
for (let i = 1; i <= contador; i++) {
  const jogada = lines.shift().split(' ');

  const sheldon = jogada[0];
  const raj = jogada[1];

  if (sheldon === raj) {
    console.log(`Caso #${i}: De novo!`);
  } else if (sheldonVence[sheldon].includes(raj)) {
    console.log(`Caso #${i}: Bazinga!`);
  } else {
    console.log(`Caso #${i}: Raj trapaceou!`);
  }
}
