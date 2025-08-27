var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
let a = prompt().split(' ');
let lista = [parseInt(a[0]), parseInt(a[1]), parseInt(a[2])];
lista.sort((a, b) => a - b);
console.log(lista[1]);
