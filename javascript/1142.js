var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let n = lines.shift();
let c1 = 1;
let c2 = 2;
let c3 = 3;


for(i=0;i<n;i++){
    console.log(c1 +" "+c2 +" "+ c3 + " PUM");
    c1 += 4;
    c2 += 4;
    c3 += 4;
}
