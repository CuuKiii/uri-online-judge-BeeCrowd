var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0])

const arr = [];

for(let i = 1; i <= n; i += 1) {
  arr.push(lines[i])
}

const result = 151 - [...new Set(arr)].length

console.log(`Falta(m) ${result} pomekon(s).`)
