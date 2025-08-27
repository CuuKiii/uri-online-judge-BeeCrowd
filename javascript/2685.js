var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var degree = parseInt(prompt());
  if (isNaN(degree)) {
    break;
  }

  if (degree < 90 || degree == 360) {
    console.log("Bom Dia!!");
  } else if (degree < 180) {
    console.log("Boa Tarde!!");
  } else if (degree < 270) {
    console.log("Boa Noite!!");
  } else {
    console.log("De Madrugada!!");
  }
}
