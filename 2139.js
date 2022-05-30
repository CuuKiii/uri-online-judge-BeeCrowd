var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const monthsInDays = {
  1: 0,
  2: 31,
  3: 60,
  4: 91,
  5: 121,
  6: 152,
  7: 182,
  8: 213,
  9: 244,
  10: 274,
  11: 305,
  12: 335,
};

while (true) {
  var input = prompt().split("");
  if (isNaN(input[0])) {
    break;
  }
  input = input.join("");

  var [month, days] = input.split(" ").map(Number);
  var totalDays = monthsInDays[month] + days;
  var daysLeft = 360 - totalDays;

  if (daysLeft < 0) {
    console.log("Ja passou!");
  }
  if (daysLeft == 0) {
    console.log("E natal!");
  }
  if (daysLeft == 1) {
    console.log("E vespera de natal!");
  }
  if (daysLeft > 1) {
    console.log("Faltam " + daysLeft + " dias para o natal!");
  }
}
