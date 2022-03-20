var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var A = parseInt(prompt('Digite o valor de A'))
var B = parseInt(prompt('Digite o valor de B'))

if((A+B) % 2 == 0){
console.log(1)
} 
else console.log(0)
