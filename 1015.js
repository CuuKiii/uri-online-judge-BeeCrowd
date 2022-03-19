var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const cocadas = input.split("\n");
/* Variável dos valores*/

const [x1, y1] = cocadas[0].split(" ");
const [x2, y2] = cocadas[1].split(" ");

const italos = Math.sqrt(Math.pow( (x2 - x1), 2) + Math.pow((y2 - y1),2) ); /* Fórmula da distancia */

console.log(italos.toFixed(4));
