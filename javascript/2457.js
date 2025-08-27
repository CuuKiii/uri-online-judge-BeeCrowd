var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
let letra = prompt();
let frase = prompt().split(" ");
let palavra = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i].includes(letra)) {
        palavra++;
    }
}
console.log((palavra * 100 / frase.length).toFixed(1));
