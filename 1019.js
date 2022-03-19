var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Italogundos = parseInt(input);

const italores = [3600, 60, 1];
const italoFinal = [];
for (let valor of italores) {
italoFinal.push( parseInt(Italogundos / valor) );
Italogundos = Italogundos % valor;
}
console.log(italoFinal.join(":"));
