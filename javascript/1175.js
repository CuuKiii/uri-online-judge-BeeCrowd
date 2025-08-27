var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let number = parseInt(lines.shift());
let array = [];
let temp;

for(let i = 0;i <= 19; i++){
  array.push(number);
  number = parseInt(lines.shift());
}

for(let i = 0, j = 19; i < 10; i++ ,j--){
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

for(let i = 0;i < array.length; i++){
  console.log(`N[${i}] = ${array[i]}`);
}
