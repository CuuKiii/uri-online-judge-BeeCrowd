var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines.shift());

for(let i = 0; i < number; i++){
  let [a, b, c] = lines.shift().trim().split(" ").map(parseFloat);
  if(b >= 50 && c >= 150 && (200 <= a && a <= 300)){
    console.log("Sim");
  }
  else{
    console.log("Nao");
  }
}
