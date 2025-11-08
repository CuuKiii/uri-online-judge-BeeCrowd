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

    let notas = lines[i++].split(" ").map(Number);
    let soma = notas.reduce((a, b) => a + b, 0);

    if (soma % n === 0) {
      let media = Math.floor(soma / n);

      // descarte_enquanto(_ < media)
      let restantes = [];
      let descartar = true;
      for (let nota of notas) {
        if (descartar && nota < media) continue;
        descartar = false;
        restantes.push(nota);
      }

      // mapeie(_ - media) e injete(0)(_ + _)
      let resposta = 1 + restantes.map(x => x - media).reduce((a, b) => a + b, 0);

      console.log(resposta);
    } else {
      console.log(-1);
    }
  }
});
