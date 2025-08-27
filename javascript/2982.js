var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
let gastos = 0;
let verba = 0;
for(let i = 0; i < number; i++){
  let [a, b] = lines.shift().trim().split(" ");
  a == "G" ? gastos += parseInt(b) : verba += parseInt(b);
}

if(verba >= gastos){
  console.log("A greve vai parar.");
}
else{
  console.log("NAO VAI TER CORTE, VAI TER LUTA!");
}
