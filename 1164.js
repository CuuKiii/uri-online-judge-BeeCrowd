var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



const number = parseInt(lines.shift());
let N = parseInt(lines.shift());
let i = 0;
let cont = 0;

while(i < number){
  for(let j = 1; j < N; j++){
    if(N % j == 0){
      cont += j;
    }
  }
  if(cont == N){
    console.log(`${N} eh perfeito`);
  }
  else{
    console.log(`${N} nao eh perfeito`);
  }

  N = parseInt(lines.shift());
  cont = 0;
  i++
}
