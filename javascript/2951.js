var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const [ammount, needed] = prompt().split(" ").map(Number);
const runes = new Map();

for (let i = 0; i < ammount; i++) {
  let rune = prompt().split(" ");
  rune[1] = parseInt(rune[1]);
  runes.set(rune[0], rune[1]);
}

prompt();

var recited = prompt().split(" ");

var sum = 0;
for (let item of recited) {
  sum += runes.get(item);
}

console.log(sum);
if (sum >= needed) {
  console.log("You shall pass!");
} else {
  console.log("My precioooous");
}
