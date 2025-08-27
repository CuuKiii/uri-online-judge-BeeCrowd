var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let cont = 0;
let jipes = 0;

while(true){
  let [a, b] = lines.shift().trim().split(" ");

  if(a == "ABEND"){
    break;
  }

  if(a == "SALIDA"){
    cont += parseInt(b);
    jipes += 1;
  }
  else if(a == "VUELTA"){
    cont -= parseInt(b);
    jipes -= 1;
  }
}

console.log(cont);
console.log(jipes);
