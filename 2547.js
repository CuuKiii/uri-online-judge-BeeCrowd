var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [a, b, c] = lines.shift().split(" ");
let cont = 0;

while(lines.length != 0){

    for(let i = 0; i < a; i++){
        const number = lines.shift();
        if(number <= parseInt(c) && number >= parseInt(b)){
            cont++
        }
    }

    console.log(cont);

    if(lines.length == 1){
        break;
    }

    [a, b, c] = lines.shift().split(" ");    
    cont = 0;
}
