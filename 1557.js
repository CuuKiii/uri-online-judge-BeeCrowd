var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var size = parseInt(prompt());

while (size > 0) {
  var T = Math.pow(4, size - 1);
  T = T.toFixed(0).length;

  for (let L = 0; L < size; L++) {
    let line = [];

    for (let C = 0; C < size; C++) {
      let aux = Math.pow(2, L + C).toFixed(0);

      line.push(aux.padStart(T));
    }

    console.log(line.join(" "));
  }

  console.log("");
  var size = parseInt(prompt());
}
