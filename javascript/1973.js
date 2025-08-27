var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const number = parseInt(prompt());
const stars = prompt().split(" ").map(Number);
var attacked = 0;
var i = 0;
var sheeps = 0;

while (i < number) {
  attacked++;

  if (stars[i] % 2 == 0) {
    while (stars[i] >= 0) {
      stars[i] = stars[i] - 1;
      i = i - 1;
    }

    break;
  }

  stars[i] = stars[i] - 1;
  i = i + 1;
}

for (let n = 0; n < number; n++) {
  if (stars[n] < 0) {
    stars[n] = 0;
  }
  sheeps = sheeps + stars[n];
}

console.log(attacked + " " + sheeps);
