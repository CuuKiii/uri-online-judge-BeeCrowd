var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
while (true) {
  var time = prompt().split("");
  if (isNaN(time[0])) {
    break;
  }
  time = time.join("");

  var [hour, minute] = time.split(":").map(Number);
  var totalMinutes = hour * 60 + minute + 60;
  var delay = totalMinutes - 480;

  if (delay < 0) {
    delay = 0;
  }

  console.log("Atraso maximo: " + delay);
}
