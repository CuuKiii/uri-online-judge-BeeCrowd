var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.shift().split(" ");
let text = "";
let cont = 0;
let boolean = false;

for(let i = 1; i <= y; i++){
  if(i == 1){
    text += i;
    cont++;
  }
  else{
    if(boolean){
      text += i;
      cont++;
      boolean = false;
    }
    else{
      text += " " + i;
      cont++;
    }
    if(i % x == 0){
      if(i == y){
        break;
      }
      text += "\n";
      cont = 0;
      boolean = true;
    }
  }
}
console.log(text);
