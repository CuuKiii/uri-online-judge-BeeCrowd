var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
while (true) {
  var input = prompt().split("");
  if (isNaN(input[0])) {
    break;
  }
  input = input.join("");

  var [x1, y1, x2, y2, V, R1, R2] = input.split(" ").map(Number);

  var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  distance = distance + 1.5 * V;
  distance = distance - R1;

  if (distance <= R2) {
    console.log("Y");
  } else {
    console.log("N");
  }
}
