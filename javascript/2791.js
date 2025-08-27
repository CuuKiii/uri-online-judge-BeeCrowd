var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arroz = lines.shift().trim().split(" ");

for(let i = 0; i <= arroz.length; i++){
  if(arroz[i] == "1"){
    console.log(i + 1);
    break;
  }
}
