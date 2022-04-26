var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const A = lines.shift().split(" ");
const velocity = lines.shift().split(" ");
let temp;
let verify = 0;


for(let i = 0; i < velocity.length, i < parseInt(A); i++){
  if(i == 0){
    temp = parseInt(velocity[0]);
  }
  else{
    if(temp <= velocity[i]){
      temp = parseInt(velocity[i]);
    }

 
    else{
      console.log(i + 1);
      verify++;
      break; 
    }
  }
}
if(verify == 0){
  console.log(0);
}
