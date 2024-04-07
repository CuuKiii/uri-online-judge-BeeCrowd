var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

lines.forEach(line => {
    let [v, t] = line.trim().split(' ').map(Number);
    console.log(v * 2 * t || 0);
});
