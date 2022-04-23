var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines.shift());
let anoes = 0;
let elfos = 0;
let humanos = 0;
let magos = 0;
let hobbits = 0;

for(let i = 0; i < number; i++){
  let [a, b] = lines.shift().trim().split(" ");
  switch(b){
    case "A":
      anoes++;
      break;
    case "E":
      elfos++;
      break;
    case "H":
      humanos++;
      break;
    case "M":
      magos++;
      break;
    case "X":
      hobbits++;
      break;
  }
}

console.log(`${hobbits} Hobbit(s)\n${humanos} Humano(s)\n${elfos} Elfo(s)\n${anoes} Anao(s)\n${magos} Mago(s)`);
