var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let herois = lines.shift().split(" ");
let x = 0;

while(x < number){
  if(herois[0] == 'Thor'){
    console.log("Y");
  }
  else{
    console.log("N");
  }
  herois = lines.shift().split(" ");
  x++;
}
