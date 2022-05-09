var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
while (true) {
  var arroz = parseInt(prompt());
  if (isNaN(arroz)) {
    break;
  }

  var feijao = Math.log(arroz) / Math.log(2);
  console.log(feijao);
}
