var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
input = input.replace('\n',' ');
var lines = input.split(' ');
var italo = parseFloat(lines.shift());
var bitalo = parseFloat(lines.shift()); 
var citalo = parseFloat(lines.shift());
var ditalo = parseFloat(lines.shift()); 
var vish, m;
m = (italo * 2 + bitalo * 3 + citalo * 4 + ditalo) / 10;
console.log("Media: " + m.toFixed(1));
if (m >= 7.0){
    console.log("Aluno aprovado.");
}
else if (m >= 5.0)
{
    console.log("Aluno em exame.");
    vish = parseFloat(lines.shift()); 
    console.log("Nota do exame: " + vish.toFixed(1));
    if (vish + m / 2.0 > 5.0){
        console.log("Aluno aprovado.");
    }
    else{
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + ((vish + m ) / 2.0).toFixed(1));
}
else{
    console.log("Aluno reprovado.");
}
