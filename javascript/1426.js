const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on("line", line => lines.push(line.trim()));
rl.on("close", () => {
  const t = parseInt(lines[0]);
  let idx = 1;

  function tijolos(x) {
    const res = [];

    for (let i = 1; i <= 9; i++) {
      const linha = [];
      for (let j = 1; j <= i; j++) {
        const a = Math.floor(i / 2);
        const b = Math.floor((j + 1) / 2);

        const imod = i % 2;
        const jmod = j % 2;

        let valor;
        if (imod === 0 && jmod === 1) {
          valor = Math.floor((x[a - 1][b - 1] + x[a][b - 1] - x[a][b]) / 2);
        } else if (imod === 0 && jmod === 0) {
          valor = Math.floor((x[a - 1][b - 1] - x[a][b - 1] + x[a][b]) / 2);
        } else if (imod === 1 && jmod === 0) {
          valor = Math.floor((x[a - 1][b - 1] - x[a][b - 1] - x[a][b]) / 2);
        } else {
          valor = x[a][b - 1];
        }

        linha.push(valor);
      }
      res.push(linha);
    }

    return res;
  }

  for (let caso = 0; caso < t; caso++) {
    const x = [];
    for (let j = 0; j < 5; j++) {
      x.push(lines[idx++].split(" ").map(Number));
    }

    const resultado = tijolos(x)
      .map(linha => linha.join(" "))
      .join("\n");

    console.log(resultado);
  }
});
