var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let temp = 1;
let sum = 0;
let back = 0;

for(let i = 0; i < number; i++){
  let n = parseInt(lines.shift());
  for(let j = 1; j < n; j++){
        sum = temp + back;
        back = temp;
        temp = sum;
  }
  if(n == 1){
    console.log(`Fib(${1}) = ${1}`);
  }
  else{
    console.log(`Fib(${n}) = ${sum}`);
  }
  sum = 0;
  temp = 1;
  back = 0;
}
