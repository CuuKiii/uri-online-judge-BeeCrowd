var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [a, b] = lines.shift().trim().split(" ");
const total = parseInt(a) * parseInt(b);
let string = "";

for(let i = 10; i < 100; i += 10){
  if(i == 10){
    string += `${Math.ceil((total * i) / 100)}`
  }
  
  else{
    string += ` ${Math.ceil((total * i) / 100)}`
  }
}
console.log(string);
