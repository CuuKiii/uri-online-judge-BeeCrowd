var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [x, y, z] = lines.shift().split(" ");

console.log((parseInt(x) / (parseInt(y) + parseInt(z))).toFixed(2));
