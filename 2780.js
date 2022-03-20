var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var D = Number(lines[0]);

if(D <= 800){
    console.log('1');
}else if((800 < D) && (D <= 1400))
    console.log('2');
else if((1400 < D) && (D <= 2000)){
    console.log('3');
}
