var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numbers = lines.shift().split(" ");
numbers.sort((a,b) => a - b).reverse();

const [a, b, c] = numbers
const A = parseFloat(a);
const B = parseFloat(b);
const C = parseFloat(c);

if(A >= B + C){
  console.log("Invalido");
  return;
}

if(A == B && B == C){
  console.log("Valido-Equilatero");
}
else if(A == B || A == C || B == C){
  console.log("Valido-Isoceles");
}

else if(A != B && B != C && C != A){
  console.log("Valido-Escaleno");
}

if(Math.pow(A, 2) == (Math.pow(B,2) + Math.pow(C,2))){
  console.log("Retangulo: S");
}
else{
  console.log("Retangulo: N");
}
