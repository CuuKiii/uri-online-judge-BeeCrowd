var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var size = parseInt(prompt());

while (size > 0) {
  for (let i = 0; i < size; i++) {
    let line = [];

    for (let n = 0; n < size; n++) {
      let aux = (1 + Math.abs(i - n)).toFixed(0);
      line.push(aux.padStart(3));
    }

    console.log(line.join(" "));
  }

  console.log("");
  size = parseInt(prompt());
}
