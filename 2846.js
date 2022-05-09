var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var fibo = [1, 1];
for (let i = 1; i < 29; i++) {
  fibo.push(fibo[i] + fibo[i - 1]);
}

const termo = parseInt(prompt());

let num = 4;
for (let i = 1; i <= termo; num++) {
  if (!fibo.includes(num)) {
    i++;
  }
}

console.log(num - 1);
