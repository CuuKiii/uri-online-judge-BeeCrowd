var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  prompt();
  var sequence = prompt().split(" ").map(Number);
  var odds = [];
  var oddsSorted = [];

  for (let item of sequence) {
    if (item % 2 == 1) {
      odds.push(item);
    }
  }

  for (let aux; odds.length > 0; ) {
    if (oddsSorted.length % 2 == 0) {
      aux = Math.max(...odds);
    } else {
      aux = Math.min(...odds);
    }

    oddsSorted.push(aux);
    odds.splice(odds.indexOf(aux), 1);
  }

  console.log(oddsSorted.join(" "));
}
