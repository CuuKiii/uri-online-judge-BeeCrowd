var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const first = lines[0].replace(/[^0-9\.]/g, '');
const second = lines[1].replace(/[^0-9\.]/g, '').replace(/(\.\d{2})\d+$/, '$1');

const cpf = first.slice(0, 11);
const restantfirst = first
  .slice(11, first.length)
  .replace(/(\.\d{2})\d+$/, '$1');

console.log(`cpf ${cpf}`);
console.log(
  (+(Number(second) + Number(restantfirst))
    .toString()
    .replace(/(\.\d{2})\d+$/, '$1')).toFixed(2)
);
