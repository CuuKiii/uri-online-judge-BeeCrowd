var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var a = prompt("Digite a Nota")

if(a <= 0){
    console.log("E")
}else if (a >=1 && a <= 35){
    console.log("D")
}else if(a >= 36 && a <= 60 ){
    console.log("C")
}else if (a >= 61 && a <= 85){
    console.log("B")
}else if (a >= 86 && a <= 100 ){
    console.log("A")
}
