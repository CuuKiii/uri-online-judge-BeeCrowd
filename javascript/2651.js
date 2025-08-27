var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const res = /zelda/i.test(lines[0]);

console.log(res ? 'Link Bolado' : 'Link Tranquilo');
