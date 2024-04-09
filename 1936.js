var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
let n = parseInt(prompt("Enter a number"));
let soma = 0;
let vezes = 2;
let fibonacci = 1;
while (true) {
    while (true) {
        if (fibonacci >= n) {
            break;
        }
        fibonacci = fibonacci * (vezes);
        vezes += 1;
    }
    if (n === fibonacci) {
        n = 0;
    } else {
        n = n - (fibonacci/(vezes-1));
    }
    fibonacci = 1;
    vezes = 2;
    soma += 1;
    if (n <= 0) {
        break;
    }
}
console.log(soma);
