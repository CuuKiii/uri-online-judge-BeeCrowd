var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const primenumber = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
};

let a = Number(lines[0]);

while (a > 0) {
  if (primenumber(a) && primenumber(a - 2)) {
    console.log(`${a - 2} ${a}`);
    break;
  }
  a--;
}
