var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = lines.shift();
let number = lines.shift();
let cont = 0;
let i = 0;

while(i < N){
  for(let j = 2; j < number; j++){
    if(number % j == 0){
      cont++;
    }
  }

  if(cont > 0){
    console.log(`${parseInt(number)} nao eh primo`);
  }
  else{
    console.log(`${parseInt(number)} eh primo`);
  }

  cont = 0;
  i++;
  number = lines.shift();
}
