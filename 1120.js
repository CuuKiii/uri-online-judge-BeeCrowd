var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var [arroz, num] = prompt().split(" ");
var feijao = "";

while (arroz !== "0" || num !== "0") {
  for (let char of num) {
    if (char != arroz) {
      feijao += char;
    }
  }

  if (feijao == 0) {
    console.log(0);
  } else if (feijao.length < 10) {
    console.log(parseInt(feijao));
  } else {
    console.log(feijao);
  }

  feijao = "";
  [arroz, num] = prompt().split(" ");
}
