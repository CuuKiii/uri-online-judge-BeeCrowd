var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [ax, bc] = lines.shift().split(" ");

console.log(`${(ax / bc).toFixed(2)}`);
