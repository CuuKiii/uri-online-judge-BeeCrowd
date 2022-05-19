var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var num = [];
var pad0 = [];

for (let i = 0; i < 3; i++) {
  num.push(parseInt(prompt()).toString());

  pad0.push(num[i].padStart(10, "0"));
  if (num[i] < 0) {
    pad0[i] = pad0[i].replace("-", "0");
    pad0[i] = pad0[i].replace("0", "-");
  }
}

const A = num[0];
const B = num[1];
const C = num[2];

console.log(`A = ${A}, B = ${B}, C = ${C}`);
console.log(
  `A = ${A.padStart(10)}, B = ${B.padStart(10)}, C = ${C.padStart(10)}`
);
console.log(`A = ${pad0[0]}, B = ${pad0[1]}, C = ${pad0[2]}`);
console.log(`A = ${A.padEnd(10)}, B = ${B.padEnd(10)}, C = ${C.padEnd(10)}`);
