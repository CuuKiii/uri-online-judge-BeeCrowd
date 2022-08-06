var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [e, f, c] = pegarValores(lines.shift())
let total = 0;
e += f;
while (e >= c) {
    total++;
    e -= c;
    e++;
}
console.log(total);
