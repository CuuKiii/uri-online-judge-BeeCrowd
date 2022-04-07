var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let l1, l2;
l1 = input.split("\n").map(int);
l2 = input.split(" ").map(int);
l2.shift();

for (i = 0; i < l1.length; i++){
    x = l1[i]
    y = l2[i]

    if (x > 0 && y > 0){
        console.log("primeiro");
    }
    else if (x < 0 && y > 0){
        console.log("segundo");
    }
    else if (x < 0 && y < 0){
        console.log("terceiro");
    }
    else if (x > 0 && y < 0){
        console.log("quarto");
    }
    else{
        break;
    }
}
function int(item){return parseInt(item,10)}
