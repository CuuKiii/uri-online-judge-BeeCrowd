var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var diver = prompt();
  var difficulty = parseFloat(prompt());
  var scores = prompt().split(" ").map(Number);
  var result = 0;

  let lowest = scores[0];
  let highest = scores[0];
  for (let i = 1; i < 7; i++) {
    lowest = (lowest + scores[i] - Math.abs(lowest - scores[i])) / 2;
    lowest = parseFloat(lowest.toFixed(1));
    highest = (highest + scores[i] + Math.abs(highest - scores[i])) / 2;
    highest = parseFloat(highest.toFixed(1));
  }

  scores.splice(scores.indexOf(lowest), 1);
  scores.splice(scores.indexOf(highest), 1);

  for (let value of scores) {
    result = result + value;
  }
  result = result * difficulty;

  console.log(diver + " " + result.toFixed(2));
}
