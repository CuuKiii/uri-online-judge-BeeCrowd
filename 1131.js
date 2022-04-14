var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number;
let [x, y] = lines.shift().split(" ");
let X = parseInt(x);
let Y = parseInt(y);
let Inter = 0;
let Gremio = 0;
let empates = 0;
let cont = 0;
let team;

while(true){
  if(X == Y){
    empates++;
  }
  else if(Y > X){
    Gremio++;
  }

  else if(X > Y){
    Inter++;
  }
  cont++;
  console.log("Novo grenal (1-sim 2-nao)");
  number = lines.shift();
  if(number == 1){
  }
  else{
    break;
  }
  [x, y] = lines.shift().split(" ");
  X = parseInt(x);
  Y = parseInt(y);
}

if(Inter > Gremio){
  team = "Inter venceu mais";
}
else if(Inter < Gremio){
  team = "Gremio venceu mais";
}
else{
  team = "Não houve vencedor"
}

console.log(`${cont} grenais\nInter:${Inter}\nGremio:${Gremio}\nEmpates:${empates}\n${team}`);
