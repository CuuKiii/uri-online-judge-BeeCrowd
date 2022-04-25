var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const T = lines.shift().trim();
const [A,B,C,D,E] = lines.shift().trim().split(" ");
let cont = 0;

if(T == A){
    cont++;
}
if(T == B){
    cont++;
}
if(T == C){
    cont++;
}
if(T == D){
    cont++;
}
if(T == E){
    cont++;
}

console.log(cont);
