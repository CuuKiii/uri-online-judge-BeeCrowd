var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let alunos = 0
let n = Number(lines.shift())
let a = lines.shift().split(' ')
for(var i = 0; i<n; i++){
    alunos += parseInt(a[i])-(parseInt(a[i])%3)}
console.log(alunos)
