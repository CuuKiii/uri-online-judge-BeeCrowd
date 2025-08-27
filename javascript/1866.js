var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();
let N = lines.shift();
let boolean = false;
let i = 0;
let S = 0;
while(i < number){
  for(let j = 1; j <= N;j++){
    if(boolean){
      boolean = false;
      S--
    }
    else{
      S++
      boolean = true;
    }
  }
  boolean = false;
  console.log(S);
  S = 0;
  N = lines.shift();
  i++;
}
