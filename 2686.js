var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var degree = parseFloat(prompt());
  if (isNaN(degree)) {
    break;
  }
  var secondsSinceMidnight = ((degree + 90) % 360) * 240;
  var time = [];

  time.push(Math.trunc(secondsSinceMidnight / 3600));
  time.push(Math.trunc((secondsSinceMidnight % 3600) / 60));
  time.push((secondsSinceMidnight % 3600) % 60);

  for (let i = 0; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = "0" + time[i];
    }
  }

  if (degree < 90 || degree == 360) {
    console.log("Bom Dia!!");
  } else if (degree < 180) {
    console.log("Boa Tarde!!");
  } else if (degree < 270) {
    console.log("Boa Noite!!");
  } else {
    console.log("De Madrugada!!");
  }

  console.log(time.join(":"));
}
