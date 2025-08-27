var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseFloat(lines.shift());
let bobo;
let cont = 0;

for(let i = 0; i < number; i++){
  if(i == 0){
    bobo = parseInt(lines.shift());
  }
  else{
    let competidor = parseInt(lines.shift());
    if(bobo < competidor){
      console.log("N");
      cont++;
      break;
    }
  }
}

if(cont == 0){
  console.log("S");
}
