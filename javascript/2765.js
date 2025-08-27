var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const phrase = prompt().split(",");
console.log(phrase.join("\n"));
