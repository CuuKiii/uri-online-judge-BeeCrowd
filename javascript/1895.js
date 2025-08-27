var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
let alice = bob = 0;
let [n, t, limite] = prompt().split(' ');
for (let i = 0; i < parseInt(n) - 1; i++) {
    let s = parseInt(prompt());
    if (Math.abs(parseInt(t) - s) <= parseInt(limite)) {
        if (i % 2 === 0) {
            alice += Math.abs(parseInt(t) - s);
        } else {
            bob += Math.abs(parseInt(t) - s);
        }
        t = s;
    }
}
console.log(alice, bob);
