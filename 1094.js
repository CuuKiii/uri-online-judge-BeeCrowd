var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arroz = parseInt(lines.shift());
let [jv, pedrao] = lines.shift().trim().split(" ");
let i = 0;
let coelhos = 0;
let sapos = 0;
let ratos = 0;

while(i < arroz){
  if(pedrao == "C"){
    coelhos += parseInt(jv);
  }
  else if(pedrao == "R"){
    ratos += parseInt(jv);
  }
  else if(pedrao == "S"){
    sapos += parseInt(jv);
  }
  i++;
  [jv, pedrao] = lines.shift().trim().split(" ");
}
let total = sapos + coelhos + ratos;
console.log(`Total: ${total} cobaias\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}\nPercentual de coelhos: ${((coelhos / total) * 100).toFixed(2)} %\nPercentual de ratos: ${((ratos / total) * 100).toFixed(2)} %\nPercentual de sapos: ${((sapos / total) * 100).toFixed(2)} %`);
