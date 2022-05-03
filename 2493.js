var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const values = input.split("\n");
const operacoes = (loop) => {
  const respostas = [];
  for (let i = 0; i < loop; i++) {
    const questoes = values.shift();
    const formatacoes = questoes.replace("=", " ").split(" ");
    const listaq = formatacoes.map((q) =>
      parseInt(q)
    );

    if (listaq[0] + listaq[1] === listaq[2]) {
      respostas.push("+");
    } else if (listaq[0] - listaq[1] === listaq[2]) {
      respostas.push("-");
    } else if (listaq[0] * listaq[1] === listaq[2]) {
      respostas.push("*");
    } else {
      respostas.push("I");
    }
  }
  return respostas;
};

const jogadores = (loop, listAnwser) => {
  const errou = [];
  for (let i = 0; i < loop; i++) {
    const [name, question, answer] = values.shift().split(" ");

    if (answer !== listAnwser[question - 1]) {
      errou.push(name);
    }
  }

  if (errou.length === 0) {
    return "You Shall All Pass!";
  }

  if (errou.length === loop) {
    return `None Shall Pass!`;
  }

  errou.sort();
  return errou.join(" ");
};

while (values.length > 0) {
  const loop = parseInt(values.shift());

  if (isNaN(loop)) {
    break;
  }

  const listQuestionsAnwser = operacoes(loop);
  console.log(jogadores(loop, listQuestionsAnwser));
}
