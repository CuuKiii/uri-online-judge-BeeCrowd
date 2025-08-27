var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var cases = parseInt(prompt());
  if (isNaN(cases)) {
    break;
  }
  var sumT = 0;
  var sumW = 0;

  for (let i = 0; i < cases; i++) {
    var [grade, workload] = prompt().split(" ").map(Number);
    sumT = sumT + grade * workload;
    sumW = sumW + workload;
  }

  var API = sumT / (sumW * 100);
  console.log(API.toFixed(4));
}
