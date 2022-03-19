const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const [a, b, c] = lines.shift()
    .split(" ")
    .map(item => Number(item))
    .sort((a, b) => b - a);

if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (a ** 2 === b ** 2 + c ** 2) {
        console.log("TRIANGULO RETANGULO");
    }
    if (a ** 2 > b ** 2 + c ** 2) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (a ** 2 < b ** 2 + c ** 2) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
        console.log("TRIANGULO EQUILATERO");
    }
    if ((a === b && b !== c) || (b === c && c !== a) || (a === c && c !== b)) {
        console.log("TRIANGULO ISOSCELES");
    }
}
