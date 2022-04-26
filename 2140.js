var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let money = [2, 5, 10, 20, 50, 100];
let cont = 0;

while(true){
  let [a, b] = lines.shift().split(" ");
  cont = 0;
  if(a == 0 && b == 0){
    break;
  }
  let troco = parseInt(b) - parseInt(a);

  if(troco > 200 || troco < 1){
    console.log("impossible");
  }
  else{
    for(let i = 1; i <= money.length;i++){
      for(let j = 0; j < money.length; j++){
        if(parseInt(a) + (money[i - 1] + money[j]) == parseInt(b) ){
          console.log("possible");      
          cont ++;
          break;
        }
      }
      if(cont != 0){
        break;
      }
    }
    if(cont == 0){
      console.log("impossible");
    }
  }
}
