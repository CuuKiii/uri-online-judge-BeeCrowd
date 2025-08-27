var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [hb20dolust, gasosaLust] = input.split("\n")

const precodolust = hb20dolust / gasosaLust

console.log(precodolust.toFixed(3) + " km/l")
