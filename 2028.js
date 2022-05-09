var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
for (let cases = 1; true; cases++) {
  var number = parseInt(prompt());
  if (isNaN(number)) {
    break;
  }

  var sequence = [0];

  for (let i = 1; i <= number; i++) {
    for (let n = 0; n < i; n++) {
      sequence.push(i);
    }
  }

  if (sequence.length == 1) {
    console.log("Caso " + cases + ": " + sequence.length + " numero");
  } else {
    console.log("Caso " + cases + ": " + sequence.length + " numeros");
  }
  console.log(sequence.join(" "));
  console.log("");
}
