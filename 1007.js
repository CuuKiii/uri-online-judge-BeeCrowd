var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.split("\n");
var A = parseInt (valores.shift());
var B = parseInt (valores.shift());
var C = parseInt (valores.shift());
var D = parseInt (valores.shift());
var DIFERENCA = A* B - C * D;
console.log("DIFERENCA = " + DIFERENCA);
