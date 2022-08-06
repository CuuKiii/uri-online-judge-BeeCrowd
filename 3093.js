var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let n = Number(lines.shift());
let q = 0; let j = 0; let k = 0; let p = 0;
for(var i = 0; i<n; i++){
    q = 0; j = 0; k = 0; p = 0;
    let a = lines.shift();
    for(var r = 0; r<a.length; r++){
        if(a[r] == 'Q'){
            q+=1}
        else if(a[r] == 'J'){
            j+=1}
        else if(a[r] == 'K'){
            k+=1}
        else if(a[r] == 'A'){
            p+=1}
    }
    if(q !== 0 & j !== 0 & k !== 0 & p!== 0){
        console.log('Aaah muleke')}
    else{
        console.log('Ooo raca viu')}
}
