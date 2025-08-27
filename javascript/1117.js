var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let l1, arr, size, n, x, y;
l1 = input.split("\n").map(parseFloat);

size = l1.length;

function invalid(item){
    if (item < 0 || item > 10 ){
       return console.log("nota invalida");
    }
}
x = l1.find(item => item > 0 && item <= 10);
arr = l1.filter(function (item){return item != x});
y = arr.find(item => item > 0 && item <= 10);
let i = 0;
while(i <size){

    invalid(l1[i]);
    i++;
}



x = x / 2;
y = y / 2;
n = x + y;
console.log("media = "+ parseFloat(n).toFixed(2) )
