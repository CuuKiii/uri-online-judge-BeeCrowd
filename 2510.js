var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();

for(let i = 0; i < number; i++){
  console.log("Y");
}
