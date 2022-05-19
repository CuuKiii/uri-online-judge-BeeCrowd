var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [comp,folha,folhaEsp] = pegarValores(lines.shift())

if(comp*folhaEsp <= folha){
    console.log("S");
}
if(comp*folhaEsp > folha){
    console.log("N");
}
