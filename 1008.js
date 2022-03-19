var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var italo = input.split("\n");
var idFuncionario = italo.shift();
var qtdHorasTrabalhadas = italo.shift();
var valorHora = italo.shift();
var salario = qtdHorasTrabalhadas * valorHora;
console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
