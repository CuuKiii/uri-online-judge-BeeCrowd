var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

while (true) {
  var inpt = prompt().split("");
  if (isNaN(inpt[0])) {
    break;
  }
  var [row, column] = inpt.join("").split(" ").map(Number);
  var board = [];

  for (let r = 0; r < row; r++) {
    let aux = ("0 " + prompt() + " 0").split(" ").map(Number);
    board.push(aux);
  }
  board.unshift(Array(column + 2).fill(0));
  board.push(Array(column + 2).fill(0));

  for (let r = 1; r <= row; r++) {
    let aux = [];

    for (let c = 1; c <= column; c++) {
      if (board[r][c] == 1) {
        aux.push(9);
      } else {
        let adjacent = 0;
        if (board[r - 1][c] == 1) {
          adjacent++;
        }
        if (board[r + 1][c] == 1) {
          adjacent++;
        }
        if (board[r][c - 1] == 1) {
          adjacent++;
        }
        if (board[r][c + 1] == 1) {
          adjacent++;
        }
        aux.push(adjacent);
      }
    }

    console.log(aux.join(""));
  }
}
