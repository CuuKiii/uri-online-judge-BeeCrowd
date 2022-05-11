var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const x = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')
  .map(x => Number(x))
  .map(x => x > 0 ? x : 1);

for (let i = 0; i < 10; i++) {
  console.log(`X[${i}] = ${x[i]}`);
}



//outra resolucao
var prompt = function(texto) { return lines.shift();};

const arr = [];
var num;

for (let i = 0; i < 10; i++) {
  num = parseInt(prompt());
  arr.push(num);

  if (arr[i] < 1) {
    arr[i] = 1;
  }

  console.log(`X[${i}] = ${arr[i]}`);
}
