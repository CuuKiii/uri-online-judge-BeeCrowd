var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let n = Number(lines.shift())
for(var i = 0; i<n; i++){
    let lista = []
    let a = lines.shift()
    for(var j = 0; j<a.length; j++){
        if(lista.length === 0 & a[j] === 'Q'){
            lista.push('Q')}
        else if(lista.length == 1 & a[j] == 'J'){
            lista.push('J')}
        else if(lista.length == 2 & a[j] == 'K'){
            lista.push('K')}
        else if(lista.length == 3 & a[j] == 'A'){
            lista.push('A')
            break}
    }
    if(lista.length != 4){
        console.log('Agora apertou sem abracar')}
    else{
        console.log('Agora vai')}
}
