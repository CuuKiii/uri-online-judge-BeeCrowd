var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [a, b] = lines.shift().split(" ");
let array = [];
while(lines.length != 0){
  
  for(let i = 0; i < parseInt(a); i++){
    let avaliation = lines.shift();
    array.push(avaliation);
  }

  array.sort((a, b) => {
    return b - a;
  });

  for(let i = 0; i < parseInt(b); i++){
    let position = lines.shift();
    console.log(array[position - 1]);
  }
  if(lines.height == 1){
    break;
  }

  [a, b] = lines.shift().split(" ");
  array = [];
}
