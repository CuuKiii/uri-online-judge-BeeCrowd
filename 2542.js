var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
while (true) {
  var attck = parseInt(prompt());
  if (isNaN(attck)) {
    break;
  }
  var [cmarcos, cleo] = prompt().split(" ").map(Number);
  var bmarcos = [];
  var bleo = [];

  if (attck == 1) {
    for (let i = 0; i < cmarcos; i++) {
      let card = parseInt(prompt());
      bmarcos.push(card);
    }
    for (let i = 0; i < cleo; i++) {
      let cartas = parseInt(prompt());
      bleo.push(cartas);
    }
  } else {
    for (let i = 0; i < cmarcos; i++) {
      let cartas = prompt().split(" ").map(Number);
      bmarcos.push(cartas);
    }
    for (let i = 0; i < cleo; i++) {
      let cartas = prompt().split(" ").map(Number);
      bleo.push(cartas);
    }
  }

  var [marcosescolha, leoescolha] = prompt().split(" ").map(Number);
  var attr = parseInt(prompt());

  if (bmarcos[marcosescolha - 1][attr - 1] > bleo[leoescolha - 1][attr - 1]) {
    console.log("Marcos");
  } else if (
    bmarcos[marcosescolha - 1][attr - 1] < bleo[leoescolha - 1][attr - 1]
  ) {
    console.log("Leonardo");
  } else {
    console.log("Empate");
  }
}
