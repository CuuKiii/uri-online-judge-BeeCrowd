var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();
for(let i = 0; i < number; i++){
  let [a, b, c] = lines.shift().trim().split(" ");
  if(a.length == 2 && b.length == 2){
     c == 1 ? console.log(`${a}:${b} - A porta abriu!`) : console.log(`${a}:${b} - A porta fechou!`);
  }
  else{
    if(a.length == 1 && b.length == 1)
    c == 1 ? console.log(`0${a}:0${b} - A porta abriu!`) : console.log(`0${a}:0${b} - A porta fechou!`);
    else if(a.length == 2 && b.length == 1){
      c == 1 ? console.log(`${a}:0${b} - A porta abriu!`) : console.log(`${a}:0${b} - A porta fechou!`);
    }
    else{
      c == 1 ? console.log(`0${a}:${b} - A porta abriu!`) : console.log(`0${a}:${b} - A porta fechou!`);
    }
  }
}
