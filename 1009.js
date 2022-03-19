var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var italo = input.split("\n");
var nome = italo.shift();
var salarioFixo = parseFloat(italo.shift());
var italoVendas = parseFloat(italo.shift());
var cocadas = italoVendas * 0.15;
var salarioFinal = salarioFixo + cocadas;
console.log("TOTAL = R$ " + salarioFinal.toFixed(2));
