var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let line1, line2, x, y;

line1 = input.split("\n").map(covert);
line2 = input.split(" ").map(covert);
line2.shift();

for(i = 0; i < line1.length; i++){

    x = line1[i];
    y = line2[i];

    if(x>y){
        console.log("Decrescente");
    }
    else if(x<y){
        console.log("Crescente");
    }
    else{
        break;
    }
}
function covert(item){return parseInt(item,10)}
