var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var a = prompt().split('/')


const dd = a[0];
const mm = a[1];
const aa = a[2];


console.log(`${mm}/${dd}/${aa}`)
console.log(`${aa}/${mm}/${dd}`)
console.log(`${dd}-${mm}-${aa}`)
