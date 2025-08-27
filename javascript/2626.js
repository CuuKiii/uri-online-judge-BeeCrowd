var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


const dodo = [
  "papel pedra pedra",
  "pedra tesoura tesoura",
  "tesoura papel papel",
];
const leo = [
  "pedra papel pedra",
  "tesoura pedra tesoura",
  "papel tesoura papel",
];
const pepper = [
  "pedra pedra papel",
  "tesoura tesoura pedra",
  "papel papel tesoura",
];

while (true) {
  var game = prompt();
  if (game == "") {
    break;
  }

  if (dodo.includes(game)) {
    console.log("Os atributos dos monstros vao ser inteligencia, sabedoria...");
  } else if (leo.includes(game)) {
    console.log("Iron Maiden's gonna get you, no matter how far!");
  } else if (pepper.includes(game)) {
    console.log("Urano perdeu algo muito precioso...");
  } else {
    console.log("Putz vei, o Leo ta demorando muito pra jogar...");
  }
}
