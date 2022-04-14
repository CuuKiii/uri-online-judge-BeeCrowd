var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arroz = lines.shift();

while(lines.length != 0){
  console.log(`${arroz - 1}`);
  arroz = lines.shift();
}
