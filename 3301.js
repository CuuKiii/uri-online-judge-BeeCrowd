var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numbers = lines[0].split(' ').map(Number);

const max = Math.max(...numbers);
const min = Math.min(...numbers);
const med = numbers.filter((n) => n !== max && n !== min)[0];

if (med === numbers[0]) console.log('huguinho');
else if (med === numbers[1]) console.log('zezinho');
else if (med === numbers[2]) console.log('luisinho');
