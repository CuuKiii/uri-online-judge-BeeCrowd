var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var group = parseInt(prompt());
  group = Number(group).toString(2);

  var currentSequence = 0;
  var largestSequence = 0;
  for (let lamp of group) {
    if (lamp == "0") {
      largestSequence = Math.max(largestSequence, currentSequence);
      currentSequence = 0;
    } else {
      currentSequence++;
    }
  }
  largestSequence = Math.max(largestSequence, currentSequence);

  console.log(largestSequence);
}
