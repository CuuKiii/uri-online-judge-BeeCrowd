var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var inpt = prompt().split("");
  if (isNaN(inpt[0])) {
    break;
  }
  var [friends, days] = inpt.join("").split(" ").map(Number);
  var impossible = true;
  var dates = [];

  for (let i = 0; i < days; i++) {
    dates.push(prompt().split(" "));
  }

  for (let element of dates) {
    if (element.includes("0")) {
    } else {
      impossible = false;
      console.log(element[0]);
      break;
    }
  }

  if (impossible) {
    console.log("Pizza antes de FdI");
  }
}
