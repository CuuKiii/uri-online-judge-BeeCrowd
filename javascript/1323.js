var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
let lista = [];
let vezes = 0;
while (true) {
    let a = 0;
    let n = parseInt(prompt("Enter a number"));
    if (n === 0) {
        break;
    }
    for (let i = 1; i <= n; i++) {
        a += i * i;
    }
    lista.push(a);
    vezes += 1;
}
for (let k = 0; k < vezes; k++) {
    console.log(lista[k]);
}
