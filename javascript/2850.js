var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
while(lines.length != 0){
    let perna = lines.shift().trim();
    if (perna == "esquerda"){
        console.log("ingles");
    }else if (perna == "direita"){
        console.log("frances");
    }else if (perna == "nenhuma"){
        console.log("portugues")
    }else(
        console.log("caiu")
    )
if(lines.length == 1){
    break;
}
}
