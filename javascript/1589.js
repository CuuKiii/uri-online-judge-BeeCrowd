var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const arroz = lines.shift();
let feijao = 0;

while(feijao < arroz){
  let [a, b] = lines.shift().split(" ");
  console.log(parseInt(a) + parseInt(b));
  feijao++;
}
