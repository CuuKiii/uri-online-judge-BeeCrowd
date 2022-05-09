var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const values = input.split(/\s+/).map((value) => parseInt(value));

function pomekonsBattle(bonus, player1PokemonsAttack, player2PokemonsAttack) {
  const [player1Ai, player1Di, player1Li] = player1PokemonsAttack;
  const [player2Ai, player2Di, player2Li] = player2PokemonsAttack;
  let player1TotalAttack = (player1Ai + player1Di) / 2.0;
  let player2TotalAttack = (player2Ai + player2Di) / 2.0;

  if (player1Li % 2 === 0) {
    player1TotalAttack += bonus;
  }

  if (player2Li % 2 === 0) {
    player2TotalAttack += bonus;
  }

  if (player1TotalAttack > player2TotalAttack) {
    return "Dabriel";
  } else if (player2TotalAttack > player1TotalAttack) {
    return "Guarte";
  }

  return "Empate!";
}

let game = values.shift();

while (game > 0) {
  const bonus = values.shift();
  const player1PokemonsAttack = values.splice(0, 3);
  const player2PokemonsAttack = values.splice(0, 3);
  console.log(
    pomekonsBattle(bonus, player1PokemonsAttack, player2PokemonsAttack)
  );
  game--;
}
