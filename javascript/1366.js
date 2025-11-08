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
    let n = parseInt(lines[i++]);
    if (n <= 0) break;

    let pares = 0;

    for (let j = 0; j < n; j++) {
      let valores = lines[i++].split(" ").map(Number);
      let v = Math.floor(valores[1] / 2); // segundo valor (índice 1)
      pares += v;
    }

    let retangulos = Math.floor(pares / 2);
    console.log(retangulos);
  }
});
