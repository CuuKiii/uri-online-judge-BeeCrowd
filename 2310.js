var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let number = parseInt(lines.shift());
let i = 0;
let SumA = 0;
let SumB = 0;
let SumS = 0;
let SumA1 = 0;
let SumB1 = 0;
let SumS1 = 0;

while(i < number){
  let name = lines.shift();
  let [S, B, A] = lines.shift().split(" ");
  let [S1, B1, A1] = lines.shift().split(" ");

  
  SumA += parseInt(A);
  SumB += parseInt(B);
  SumS += parseInt(S);
  SumA1 += parseInt(A1);
  SumB1 += parseInt(B1);
  SumS1 += parseInt(S1);
  i++;
}


console.log(`Pontos de Saque: ${((SumS1 * 100) / SumS).toFixed(2)} %.\nPontos de Bloqueio: ${((SumB1 * 100) / SumB).toFixed(2)} %.\nPontos de Ataque: ${((SumA1 * 100) / SumA).toFixed(2)} %.`)
