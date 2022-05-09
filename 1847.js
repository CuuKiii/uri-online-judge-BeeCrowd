var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const vetor = lines.shift().split(' ').map(Number);

const A = vetor[0];
const B = vetor[1];
const C = vetor[2];

switch (true) {
  case (B < A && C >= B):
  case (B > A && C > B && (C - B) >= (B - A)):
  case (B < A && C < B && (B - C) < (A - B)):
  case (B === A && C > B):
    console.log(':)');
    break;
  default:
    console.log(':(');
    break;
}
