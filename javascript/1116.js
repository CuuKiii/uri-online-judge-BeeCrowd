var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let l1, n, x, y;
l1 = input.split("\n");
size = l1.shift();
for (i = 0; i < size; i++){
    n = l1.shift().split(" ");

    x = parseInt(n[0]);
    y = parseInt(n[1]);

    if (isFinite(x / y) === false ){
        (console.log("divisao impossivel"));
    }
    else{
        console.log(parseFloat(x / y).toFixed(1));
    }
}
