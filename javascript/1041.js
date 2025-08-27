var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var italo = lines.shift().split(" ");
var olati = parseFloat(italo[0]);
var lotai = parseFloat(italo[1]);

if (olati == 0 && lotai === 0) {
    console.log('Origem');
} else if (olati === 0) {
    console.log('Eixo Y');
} else if (lotai === 0) {
    console.log('Eixo X');
} else if (lotai > 0 && olati > 0) {
    console.log('Q1');
} else if (lotai > 0 && olati < 0) {
    console.log('Q2');
} else if (lotai < 0 && olati < 0) {
    console.log('Q3');
} else if (lotai < 0 && olati > 0) {
    console.log('Q4');
}
