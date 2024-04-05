var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
while (true) {
    let n = parseInt(prompt());
    if (n === 0) {
        break;
    }
    let a = prompt().split(" ").map(Number);
    let soma = 10;
    if (n !== 1) {
        for (let i = 0; i < n - 1; i++) {
            if (a[i + 1] - a[i] > 10) {
                soma += 10;
            } else {
                soma += a[i + 1] - a[i];
            }
        }
    }
    console.log(soma);
}
