var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let number = lines.shift().trim();
let cont = 0;

for(let i = 0; i < number.length; i++){
    if(number[i] == 1){
        cont++;
    }
}

if(cont % 2 != 0){
    console.log(number + 1);
}
else{
    console.log(number + 0);
}
