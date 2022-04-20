var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let cont = 0;
let number = lines.shift();
let votes = lines.shift().split(" ");
while(lines.length != 0){
  for(let i = 0; i < votes.length, i < parseInt(number); i++){
    if(parseInt(votes[i]) == 1){
      cont++
    };
  }
  if(cont >= (votes.length * (2 / 3))){
    console.log("impeachment");
  }
  else{
    console.log("acusacao arquivada");
  }

  if(lines.length == 1){
    break;
  }

  cont = 0;
  number = lines.shift();
  votes = lines.shift().split(" ");
}
