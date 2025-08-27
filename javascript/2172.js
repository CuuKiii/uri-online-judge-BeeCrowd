var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [a, b] = lines.shift().split(" ");

while(true){
  if(a == 0 && b == 0){
    break;
  }

  else{
    console.log(`${a * b}`);
  }

  [a, b] = lines.shift().split(" ");
}
