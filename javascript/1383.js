const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on("line", line => lines.push(line.trim()));
rl.on("close", () => {
  let index = 0;
  const n = parseInt(lines[index++]);

  // Função que testa uma submatriz de s
  function f(s, x1, y1, x2, y2) {
    let linha = [];

    for (let i = x1 - 1; i < x2; i++) {
      for (let j = y1 - 1; j < y2; j++) {
        linha.push(s[i][j]);
      }
    }

    linha.sort((a, b) => a - b);

    // Verifica se é [1..9]
    for (let i = 0; i < 9; i++) {
      if (linha[i] !== i + 1) return false;
    }
    return true;
  }

  for (let caso = 1; caso <= n; caso++) {
    let s = [];
    for (let j = 0; j < 9; j++) {
      s.push(lines[index++].split(" ").map(Number));
    }

    let linhas = [];

    // Linhas
    for (let j = 1; j <= 9; j++) linhas.push(f(s, j, 1, j, 9));
    // Colunas
    for (let j = 1; j <= 9; j++) linhas.push(f(s, 1, j, 9, j));
    // Blocos 3x3
    for (let j of [1, 4, 7]) {
      for (let k of [1, 4, 7]) {
        linhas.push(f(s, j, k, j + 2, k + 2));
      }
    }

    const ok = linhas.every(Boolean);

    console.log(`Instancia ${caso}`);
    console.log(ok ? "SIM" : "NAO");
    console.log("");
  }
});
