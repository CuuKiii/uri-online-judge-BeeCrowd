var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var italo = lines.shift().split(" ");
var codigo = parseInt(italo[0]);
var quantia = parseInt(italo[1]);
var italotal;

switch (codigo) {
    case 1: italotal = quantia * 4.00; break;
    case 2: italotal = quantia * 4.50; break;
    case 3: italotal = quantia * 5.00; break;
    case 4: italotal = quantia * 2.00; break;
    case 5: italotal = quantia * 1.50; break;
    default: italotal = 0;
}

console.log("Total: R$ " + italotal.toFixed(2));
