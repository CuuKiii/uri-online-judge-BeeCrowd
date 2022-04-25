var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const A = lines.shift();
const picos = lines.shift().split(" ");
let temp;
let below = 0;
let above = 0;
let equal = 0;

for(let i = 0; i < picos.length, i <= parseInt(A); i++){
  if(i == 0){
    temp = parseInt(picos[0]);
  }
  else{
    if(temp < picos[i]){
      temp = parseInt(picos[i]);
      above++;
      below = 0;
    }
    else if(temp > picos[i]){
      temp = parseInt(picos[i]);
      below++;
      above = 0;
    }
    else if(temp == picos[i]){
      equal++;
    }

    if(above == 2 || below == 2 || equal == 1){
      console.log("0");
      equal++
      break;
    }
  }
}


if(above < 2  && below < 2 && equal == 0){
  console.log("1");
}
