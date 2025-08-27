var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let [a, b] = lines.shift().trim().split(" ");
let sum = 0;
let i = 0;

while(i < number){
  switch(a){
    case "1001":
      sum += b * 1.50;
    break;
    case "1002":
      sum += b * 2.50;
    break;
    case "1003":
      sum += b * 3.50;
    break;
    case "1004":
      sum += b * 4.50;
    break;
    case "1005":
      sum += b * 5.50;
    break;
  }
  i++;
  [a, b] = lines.shift().trim().split(" ");
}
console.log(sum.toFixed(2));
