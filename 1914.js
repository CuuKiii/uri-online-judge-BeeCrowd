var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();
let sum = 0;

for(let i = 0; i < number; i++){
  let [player1, jogada1, player2, jogada2] = lines.shift().trim().split(" ");
  let [a , b] = lines.shift().split(" ");

  sum = parseInt(a) + parseInt(b);

  if( sum % 2 == 0){
    jogada1 == "PAR" ? console.log(player1) : console.log(player2);
  }
  else{
    jogada1 == "IMPAR" ? console.log(player1) : console.log(player2);
  }

  sum = 0;
}
