var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var ducks = prompt();
  if (ducks < 0) {
    break;
  }

  if (0 < ducks && ducks < 10000000000) {
    ducks = (parseInt(ducks) - 1).toString();
  } else if (0 < ducks) {
    var half1 = ducks.slice(-10);
    var half2 = ducks.slice(0, -10);

    if (half1 > 0) {
      half1 = (parseInt("1" + half1) - 1).toString();
      half1 = half1.slice(-10);
    } else {
      half1 = "9999999999";
      half2 = (parseInt(half2) - 1).toString();
    }

    ducks = half2 + half1;
  }

  console.log(ducks);
}
