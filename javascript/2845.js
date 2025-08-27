var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
function areCoprimes(min, max) {
  for (let i = 2; i <= min; i++) {
    if (min % i == 0 && max % i == 0) {
      return false;
    }
  }
  return true;
}

function areAllCoprimes(arr, num) {
  for (let item of arr) {
    if (!areCoprimes(item, num)) {
      return false;
    }
  }
  return true;
}

prompt();
const identifiers = prompt().split(" ").map(Number);

var highest = Math.max(...identifiers);
for (var id = highest + 1; true; id++) {
  if (areAllCoprimes(identifiers, id)) {
    break;
  }
}

console.log(id);
