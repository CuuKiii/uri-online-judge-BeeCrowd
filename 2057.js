var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var [S,T,F] = (prompt("Digite os Valores").split(" ")).map(Number)
var final = (S + T + F)
if(S==0){
    S=24
}
var final = (S + T + F)
if (final >= 24){
    final = final - 24
    console.log(final)
}else if (final==24 && final==0){
    console.log(final)
}else{
    console.log(final)
}

