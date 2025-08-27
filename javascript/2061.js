var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.shift().split(" ");
let action;

for(let i = 0; i < y; i++){
  action = lines.shift().trim();
  if(action == "fechou"){
    x++;
  }
  else{
    x--;
  }
}

console.log(x);
