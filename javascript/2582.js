var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let sum = 0;
let i = 0;

while(i < number){
  let [a, b] = lines.shift().split(" ");
  sum = parseInt(a) + parseInt(b);
  switch(sum){
    case 0:
      console.log("PROXYCITY");
      break;
    case 1:
      console.log("P.Y.N.G.");
      break;
    case 2:
      console.log("DNSUEY!");

      break;
    case 3:
      console.log("SERVERS");

      break;
    case 4:
      console.log("HOST!");

      break;
    case 5:
      console.log("CRIPTONIZE");

      break;
    case 6:
      console.log("OFFLINE DAY");
      break;
    case 7:
      console.log("SALT");
      break;
    case 8:
      console.log("ANSWER!");
      break;
    case 9:
      console.log("RAR?");
      break;
    case 10:
      console.log("WIFI ANTENNAS");
      break;
  }
  sum = 0;
  i++;
}
