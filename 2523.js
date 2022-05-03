var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let word = "";
let alphabet = lines.shift();
let number = lines.shift();
let letters = lines.shift().split(" ");

while(lines.length != 0){
  for(let i = 0; i <  parseInt(number); i++){
    word += alphabet[(parseInt(letters[i]) - 1)];
  }

  console.log(word);
  if(lines.length == 1){
    break;
  }
  
  word = "";
  alphabet = lines.shift();
  number = lines.shift();
  letters = lines.shift().split(" ");
}
