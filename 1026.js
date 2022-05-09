var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
while (true) {
  var inpt = prompt();
  if (inpt == "") {
    break;
  }

  var [A, B] = inpt.split(" ").map(Number);
  A = A.toString(2);
  B = B.toString(2);

  A = A.padStart(32, "0");
  B = B.padStart(32, "0");

  var sum = "";
  for (let i = 0; i < 32; i++) {
    if (A.charAt(i) == B.charAt(i)) {
      sum += "0";
    } else {
      sum += "1";
    }
  }

  console.log(parseInt(sum, 2));
}
