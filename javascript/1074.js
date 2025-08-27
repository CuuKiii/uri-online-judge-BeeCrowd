var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var italo = parseInt(prompt("Digite Os Valores"))
var B = 0;

while(B!=italo){
    B++;
    var thales = parseInt(prompt());
    if(thales>0){
        if(thales%2==0){
            console.log("EVEN POSITIVE")
        }else(console.log("ODD POSITIVE"))
    }else if (thales<0){
        if(thales%2==0){
            console.log("EVEN NEGATIVE")
        }else{
            console.log("ODD NEGATIVE")
        }
    }else{
        console.log("NULL");
    }
}
