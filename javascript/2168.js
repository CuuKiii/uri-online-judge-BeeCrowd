var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const size = parseInt(prompt()) + 1;
var blocks = [];

for (let i = 0; i < size; i++) {
  let aux = prompt().split(" ").map(Number);
  blocks.push(aux);
}

for (let r = 0; r < size - 1; r++) {
  let aux = [];
  for (let c = 1; c < size; c++) {
    if (
      blocks[r][c] +
        blocks[r][c - 1] +
        blocks[r + 1][c - 1] +
        blocks[r + 1][c] >
      1
    ) {
      aux.push("S");
    } else {
      aux.push("U");
    }
  }
  console.log(aux.join(""));
}
