var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let b = lines.shift().split(' ')
let n = parseInt(b[0]); let a = parseInt(b[1]);
let jog = 0; let gol = 1;
for(var i = 0; i<n; i++){
    gol = 1
    let letra = lines.shift().split(' ')
    for(var j = 0; j<a; j++){
        if(letra[j] == '0'){
            gol=0}}
    if(gol == 1){
        jog+=1}}
console.log(jog)
