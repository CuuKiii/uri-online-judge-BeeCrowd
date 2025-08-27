var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();
for(let i = 0; i < number; i++){
  let player1 = lines.shift().trim();
  let player2 = lines.shift().trim();
  
  switch(player1){
    case 'ataque':
      if(player1 == player2){
        console.log("Aniquilacao mutua");
      }
      else{
        console.log("Jogador 1 venceu");
      }
      break;
    case 'pedra':
      if(player1 == player2){
        console.log("Sem ganhador");
      }
      else if(player2 == "ataque"){
        console.log("Jogador 2 venceu");
      }
      else{
        console.log("Jogador 1 venceu");
      }
      break;
    case 'papel':
      if(player1 == player2){
        console.log("Ambos venceram");
      }
      else{
        console.log("Jogador 2 venceu");
      }
      break;
  }
}
