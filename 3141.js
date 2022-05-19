var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const formatDate = (date) => date.split('/').reverse().join('-');

const name = lines[0];
const date1 = new Date(formatDate(lines[1]));
const date2 = new Date(formatDate(lines[2]));

if (date1.getDay() === date2.getDay() && date1.getMonth() === date2.getMonth())
  console.log('Feliz aniversario!');

console.log(
  `Voce tem ${new Date(date1 - date2).getFullYear() - 1970} anos ${name}.`
);
