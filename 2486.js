var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();
let sum = 0;

while(number != 0){
  for(let i = 0; i < number; i++){
    let [a, b] = lines.shift().trim().split(" ");
    switch(b){
      case "suco":
        sum += parseInt(a) * 120;
        break;
      case "morango":
        sum += parseInt(a) * 85;
        break;
      case "mamao":
        sum += parseInt(a) * 85;
        break;
      case "goiaba":
        sum += parseInt(a) * 70;
        break;
      case "manga":
        sum += parseInt(a) * 56;
        break;
      case "laranja":
        sum += parseInt(a) * 50;
        break;
      case "brocolis":
        sum += parseInt(a) * 34;
        break;
    }
  }
  if(sum >= 110 && sum <= 130){
    console.log(`${sum} mg`);
  }
  else if(sum > 130){
    console.log(`Menos ${(130 - sum) * -1} mg`)
  }
  else if(sum < 110){
    console.log(`Mais ${110 - sum} mg`)
  }

  sum = 0;
  number = lines.shift();
}
