var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var jogos = parseInt(prompt());
var x = 0;

var a;
for (let i = 0; i < jogos; i++) {
  a = parseInt(prompt());

  if (a > 1) {
    x++;
  }
}

console.log(x);
