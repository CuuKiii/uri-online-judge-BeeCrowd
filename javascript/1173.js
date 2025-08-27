var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = [Number(require('fs').readFileSync('/dev/stdin', 'utf8'))];
console.log(`N[0] = ${n[0]}`);

for (let i = 1; i < 10; i++) {
  n.push(n[i - 1] * 2);
  console.log(`N[${i}] = ${n[i]}`);
}
//outra resolução 
var prompt = function(texto) { return lines.shift();};

const num = parseInt(prompt());
const arr = [num];

for (let i = 0; i < 9; i++) {
  arr.push(arr[i] * 2);
}

for (let i = 0; i < 10; i++) {
  console.log(`N[${i}] = ${arr[i]}`);
}
