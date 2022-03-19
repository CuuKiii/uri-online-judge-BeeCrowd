var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var italo = parseFloat(input);
var PI = 3.14159;
var boleta = (4/3) * PI * Math.pow(italo, 3);
console.log("VOLUME = "+ boleta.toFixed(3));
