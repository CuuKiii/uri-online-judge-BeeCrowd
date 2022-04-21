var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const A = lines.shift().split(" ");
const numbers = lines.shift().split(" ");
let mult2 = 0;
let mult3 = 0;
let mult4 = 0;
let mult5 = 0;

for(let i = 0; i < numbers.length, i < parseInt(A); i++){
  if(numbers[i] % 2 == 0){
    mult2++;
  }
  if(numbers[i] % 3 == 0){
    mult3++;
  }
  if(numbers[i] % 4 == 0){
    mult4++;
  }
  if(numbers[i] % 5 == 0){
    mult5++;
  }
}

console.log(`${mult2} Multiplo(s) de 2\n${mult3} Multiplo(s) de 3\n${mult4} Multiplo(s) de 4\n${mult5} Multiplo(s) de 5`);
