var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const qtdMinutos = (60 * input) / 30;

console.log(qtdMinutos + " minutos");
