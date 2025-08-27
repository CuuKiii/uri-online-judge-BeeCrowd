var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift()};
var [o, i] = (prompt(' ').split(' ').map(Number))
var x = o%i
console.log(x)
