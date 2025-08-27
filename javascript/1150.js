var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let X = parseInt(lines.shift());
let Z = parseInt(lines.shift());
let temp = X;
let cont = 1;
while(true){
    if(X >= Z){
        Z = parseInt(lines.shift());
    }
    else{
        break;
    }
}

while(X <= Z){
    temp++;
    X += temp
    cont ++;
}

console.log(cont);
