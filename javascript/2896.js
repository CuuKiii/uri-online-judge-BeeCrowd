var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
for(let i = 0; i < number; i++){
  const [a, b] = lines.shift().trim().split(" ");
  if(parseInt(a) < parseInt(b)){
    console.log(a);
  }
  else{
    console.log(`${Math.floor(parseInt(a) / parseInt(b)) + (parseInt(a) % parseInt(b))}`);
  }
}
