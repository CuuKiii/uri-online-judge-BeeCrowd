var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();
let i = 0;
while(i < number){
  console.log("I am Toorg!");
  i++;
}
