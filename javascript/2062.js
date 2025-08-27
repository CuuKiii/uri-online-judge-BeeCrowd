var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const response = lines[1].split(' ').map((v) => {
  if (/^UR\w$/.test(v)) return 'URI';
  if (/^OB\w$/.test(v)) return 'OBI';
  return v;
}).join(' ');

console.log(response)
