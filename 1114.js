var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var x = 1
while (x !=2002){
    x = parseInt(prompt("Digite a Senha"))
if(x != 2002){
    console.log("Senha Invalida")
}else{
    
    console.log("Acesso Permitido")
}
}
