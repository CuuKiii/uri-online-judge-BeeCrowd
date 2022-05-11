var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const cases = parseInt(prompt());
var weatherHome;
var weatherWork;
var storeHome = 0;
var storeWork = 0;
var home = 0;
var work = 0;

for (let i = 0; i < cases; i++) {
  [weatherHome, weatherWork] = prompt().split(" ");

  if (weatherHome == "chuva") {
    if (home > 0) {
      home--;
    } else {
      storeHome++;
    }
    work++;
  }

  if (weatherWork == "chuva") {
    if (work > 0) {
      work--;
    } else {
      storeWork++;
    }
    home++;
  }
}

console.log(storeHome + " " + storeWork);
