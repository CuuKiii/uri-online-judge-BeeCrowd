var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valor = parseInt(input);

console.log(valor);

let TrocoItalo = parseInt(valor / 100);
console.log(`${TrocoItalo} nota(s) de R$ ${100},00`);
valor = valor % 100;


TrocoItalo = parseInt(valor / 50);
console.log(`${TrocoItalo} nota(s) de R$ ${50},00`);
valor = valor % 50;


TrocoItalo = parseInt(valor / 20);
console.log(`${TrocoItalo} nota(s) de R$ ${20},00`);
valor = valor % 20;


TrocoItalo = parseInt(valor / 10);
console.log(`${TrocoItalo} nota(s) de R$ ${10},00`);
valor = valor % 10;



TrocoItalo = parseInt(valor / 5);
console.log(`${TrocoItalo} nota(s) de R$ ${5},00`);
valor = valor % 5;


TrocoItalo = parseInt(valor / 2);
console.log(`${TrocoItalo} nota(s) de R$ ${2},00`);
valor = valor % 2;


TrocoItalo = parseInt(valor / 1);
console.log(`${TrocoItalo} nota(s) de R$ ${1},00`);
valor = valor % 1;
