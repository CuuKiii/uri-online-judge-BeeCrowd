var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var [deliver, due] = prompt().split(" ").map(Number);

if (deliver > due) {
  console.log("Eu odeio a professora!");
} else if (due - deliver >= 3) {
  console.log("Muito bem! Apresenta antes do Natal!");
} else {
  console.log("Parece o trabalho do meu filho!");

  if (deliver + 2 < 24) {
    console.log("TCC Apresentado!");
  } else {
    console.log("Fail! Entao eh nataaaaal!");
  }
}
