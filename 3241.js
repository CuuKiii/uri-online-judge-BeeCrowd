var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift(); };
let count = parseInt(prompt("quantidade e vezes")); x = 0, y = 0;

for(count; count > 0; count--) {
    
    let soma = prompt("soma");
    if (soma != 'P=NP') {
        soma = soma.split('+');
        x = parseInt(soma.shift());
        y = parseInt(soma.shift());

        soma = x + y;
        console.log(soma);
    } else {
        console.log('skipped');
    }
    soma = 0;
}
