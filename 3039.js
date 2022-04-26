var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines.shift());
let carrinho = 0;
let boneca = 0;

for(let i = 0; i < number; i++){
  let [a, b] = lines.shift().trim().split(" ");
  b == "F" ? boneca++ : carrinho++;
}

console.log(`${carrinho} carrinhos\n${boneca} bonecas`);
