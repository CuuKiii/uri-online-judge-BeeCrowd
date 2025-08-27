var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const line = lines.shift().split(' ').map(Number);

const vetor = line.sort((a, b) => a - b);



if (
  (Math.abs(vetor[0] - vetor[1]) < vetor[2] &&
    vetor[2] < vetor[0] + vetor[1]) ||
  (Math.abs(vetor[0] - vetor[1]) < vetor[3] &&
    vetor[3] < vetor[0] + vetor[1]) ||
  (Math.abs(vetor[0] - vetor[2]) < vetor[3] &&
    vetor[3] < vetor[0] + vetor[2]) ||
  (Math.abs(vetor[1] - vetor[2]) < vetor[3] && vetor[3] < vetor[1] + vetor[2])
) {
  console.log('S');
} else {
  console.log('N');
}
