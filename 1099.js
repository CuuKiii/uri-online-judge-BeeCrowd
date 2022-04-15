var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift();
let [x, y] = lines.shift().split(" ");
let X = parseInt(x);
let Y = parseInt(y);
let i = 0;
let sum = 0;
let j = 0;

while(j < A){
  if(X < Y){
    i = X + 1
    for(i; i < Y; i++){
      if(i % 2 != 0){
        sum += i;
      }
    }
     console.log(sum);
  }
  else{
    i = Y + 1
    for(i; i < X; i++){
      if(i % 2 != 0){
        sum += i;
      }
    }
     console.log(sum);
  }
  [x, y] = lines.shift().split(" ");
  X = parseInt(x);
  Y = parseInt(y);
  j++;
  sum = 0;
}
