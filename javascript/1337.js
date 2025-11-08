const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on("line", line => lines.push(line.trim()));
rl.on("close", () => {
  let i = 0;

  while (i < lines.length) {
    let king = lines[i++].split(" ").map(Number).sort((a, b) => a - b);
    if (king[0] <= 0) break;

    let [a, b, c] = king;
    let resposta;

    if (a === 13) {
      resposta = "*";
    } else if (a === c) {
      resposta = `${a + 1} ${a + 1} ${a + 1}`;
    } else if (a < b && b < c) {
      resposta = "1 1 2";
    } else if (b < c && c === 13) {
      resposta = `1 ${a + 1} ${a + 1}`;
    } else if (b < c) {
      resposta = `${a} ${a} ${c + 1}`;
    } else if (a === 12) {
      resposta = "1 1 1";
    } else if (a + 1 < b) {
      resposta = `${a + 1} ${b} ${c}`;
    } else {
      resposta = `${b} ${b} ${a + 2}`;
    }

    console.log(resposta);
  }
});
