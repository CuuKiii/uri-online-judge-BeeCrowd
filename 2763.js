var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var a = prompt("Digite o CPF").replace('-','.').split('.')



const cpf1 = a[0];
const cpf2 = a[1];
const cpf3 = a[2];
const cpf4 = a[3];

console.log(cpf1)
console.log(cpf2)
console.log(cpf3)
console.log(cpf4)
