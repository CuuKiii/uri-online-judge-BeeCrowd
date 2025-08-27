var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = lines.shift();
let lesmas = lines.shift().split(" ");
let temp = lesmas[0];
let cont = 0;

while(lines.length != 0){
  for(let i = 0; i < lesmas.length, i < A; i++){ 
    if(parseInt(temp) > parseInt(lesmas[i])){
    }

    else{
      temp = lesmas[i];
      if(parseInt(temp) < 10){
        cont = 1;
      }
      else if(parseInt(temp) >= 10  && parseInt(temp) < 20){
        cont = 2;
      }
      else if(parseInt(temp) >= 20){
        cont = 3;
      }
    }
  }
  console.log(cont);
  if(lines.length == 1){
    break;
  }
  A = lines.shift();
  lesmas = lines.shift().split(" ");
  cont = 0;
  temp = lesmas[0]; 
  
};
