var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const a = lines.shift()
const b = lines.shift()

a < b ? console.log(`${a}\n${b}`) : console.log(`${b}\n${a}`)
