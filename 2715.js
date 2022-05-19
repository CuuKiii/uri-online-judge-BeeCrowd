var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var size = parseInt(prompt());
  if (isNaN(size)) {
    break;
  }
  var assignments = prompt().split(" ").map(Number);

  var sumHalf =
    assignments.reduce((previous, current) => previous + current) / 2;
  var rangel = 0;
  var gugu = 0;

  for (var r = 0; rangel <= sumHalf; r++) {
    rangel = rangel + assignments[r];
  }

  var notDone = assignments.slice(r - 1);
  for (let element of notDone) {
    gugu = gugu + element;
  }

  if (gugu > rangel) {
    gugu = gugu - notDone[0];
  } else {
    rangel = rangel - notDone[0];
  }

  console.log(Math.abs(rangel - gugu));
}
