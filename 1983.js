var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = lines.shift();
let [a , b] = lines.shift().split(" ");
let tempMatricula;
let tempNota;
let i = 0;

while(i < N){
  if(i == 0){
    tempMatricula = a;
    tempNota = b;
    [a , b] = lines.shift().split(" ");
    i++;
  }
  else{
    if(parseFloat(tempNota) > parseFloat(b)){
      i++;
      [a , b] = lines.shift().split(" ");
    }
    else{
      tempMatricula = a;
      tempNota = b;
      i++;
      [a , b] = lines.shift().split(" ");
    }
  }
}


if(tempNota >= 8){
  console.log(tempMatricula);
}
else{
  console.log("Minimum note not reached");
}
