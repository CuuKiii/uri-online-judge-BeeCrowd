var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [a, b, c] = lines.shift().split(" ");
let carimbadas = lines.shift().trim().split(" ");
let cards = lines.shift().split(" ");
let deck = [];
let cont = 0;

for(let i = 0; i < parseInt(c); i++){
  deck.push(cards[i]);
}

const newDeck = [...new Set(deck)];

for(let i = 0; i < parseInt(b); i++){
  for(let j = 0; j < newDeck.length; j++){
    if(newDeck[j] === carimbadas[i]){
      cont++
    }
  }
}

console.log(parseInt(b) - cont);
