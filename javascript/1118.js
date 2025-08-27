var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let l1, limite, n1, n2, average;
l1 = input.split("\n").map(Number);
limite = 0;

for (i = 0; i < l1.length; i++){
    if(l1[i] >=0 && l1[i] <= 10){
        limite++;
        if(limite===1){
            n1 = l1[i];
    
        }
        if (limite ===2 ){
            n2 = l1[i];
            average = (n1 + n2) / 2;
            console.log("media = "+ average.toFixed(2))
        }
        if(limite > 2 && l1[i] === 2){
            console.log("novo calculo (1-sim 2-nao)");
            break;
        }
    }
    if (limite < 2 && l1[i] > 10 === true) {
  console.log("nota invalida"); 
    }
if (limite < 2 && l1[i] < 0 === true) {
  console. log("nota invalida"); 
}
if (limite > 2 === true) {
  console.log("novo calculo (1-sim 2-nao)"); 
}
if (l1[i] === 1 && limite > 2) {
  limite = 0;
}
}
