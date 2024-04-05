var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
let n = parseInt(prompt());

let j = 1;

while(n != 0){

    let nomePar = prompt();
    let nomeImp = prompt();
    
    let soma = 0;
    
    for (let i = 0; i < n; i++){
    
        let inputs = prompt().split(' ');
        let par = parseInt(inputs[0]);
        let impa = parseInt(inputs[1]);
    
        soma = par + impa;
    
        if(i == 0){
    
            console.log("Teste " + j);
    
        }
    
        if(soma % 2 == 0){
    
            console.log(nomePar);
    
        } else {
    
            console.log(nomeImp);
    
        }
    
    }
    
    console.log("");

    j = j + 1;

    n = parseInt(prompt());

}
