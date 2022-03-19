var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split("\n");

var A = parseInt(valores[0]);
var B = parseInt(valores[1]);
var X = A * B;
console.log("PROD = " + X);
