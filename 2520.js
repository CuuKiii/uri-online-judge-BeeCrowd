var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var inpt = prompt().split("");
  if (isNaN(inpt[0])) {
    break;
  }
  var [row, column] = inpt.join("").split(" ").map(Number);
  var x1;
  var y1;
  var x2;
  var y2;

  for (let r = 0; r < row; r++) {
    let aux = prompt().split(" ").map(Number);

    if (aux.indexOf(1) > -1) {
      x1 = aux.indexOf(1);
      y1 = r;
    }
    if (aux.indexOf(2) > -1) {
      x2 = aux.indexOf(2);
      y2 = r;
    }
  }

  var path = Math.abs(x2 - x1) + Math.abs(y2 - y1);
  console.log(path);
}
