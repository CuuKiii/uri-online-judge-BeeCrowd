var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let total = parseInt(lines.shift());
let cards = parseInt(lines.shift());
let deck = [];
let cont = 0;
let temp;
for(let i = 0; i < cards; i++){
  let card = parseInt(lines.shift());
  deck.push(card);
}




console.log(total - [...new Set(deck)].length);
