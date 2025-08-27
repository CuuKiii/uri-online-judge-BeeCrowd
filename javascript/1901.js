var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
let n = parseInt(prompt());
let matriz = [];
let lista = [];
let especies = [];
for(let i=0; i<n; i++){
    let num = prompt().split(' ');
    for(let l=0; l<n; l++){
        lista.push(num[l]);
    }
    matriz.push([...lista]);
    lista = [];
}
for(let o=0; o<n*2; o++){
    let [j, k] = prompt().split(' ');
    j = parseInt(j); 
    k = parseInt(k);
    if(!especies.includes(matriz[j-1][k-1])){
        especies.push(matriz[j-1][k-1]);
    }
}
console.log(especies.length);
