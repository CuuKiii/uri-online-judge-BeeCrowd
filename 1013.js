var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [A, B, C] = input.split(" ").map(item => parseInt(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC + " eh o maior");
