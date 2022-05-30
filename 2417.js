var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

function conta(A,B){
    return A*3+B
}

var [C1, C2, C3, F1, F2, F3]=prompt().split(' ').map(Number);

var cormengo=conta(C1,C2);
var flaminthians=conta(F1,F2);

if(cormengo>flaminthians || (cormengo==flaminthians && C3>F3)){
    console.log('C');
}else if(flaminthians>cormengo || (flaminthians==cormengo && F3>C3)){
    console.log('F');
}else{
    console.log('=');
}
