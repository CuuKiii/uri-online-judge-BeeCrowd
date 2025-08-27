var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var inpt = prompt();
  if (inpt == "") {
    break;
  }

  var measures = prompt().split(" ").map(Number);

  var mean = 0;
  for (let i = 0; i < measures.length; i++) {
    mean += measures[i];
  }
  mean = mean / measures.length;

  var summation = 0;
  for (let i = 0; i < measures.length; i++) {
    summation += (measures[i] - mean) * (measures[i] - mean);
  }

  var accuracy = Math.sqrt(summation / (measures.length - 1));

  console.log(accuracy.toFixed(5));
}
