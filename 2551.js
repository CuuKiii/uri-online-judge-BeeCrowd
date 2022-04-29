var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let record = 0;

while(lines.length != 0){

    const number = parseInt(lines.shift());

    for(let i = 1; i <= number; i++){
        let [a, b] = lines.shift().split(" ");
        if(i == 1){
            console.log(i);
            record = b / a;
        }
        
        if((b / a) > record){
            console.log(i);
            record = b / a;
        }
    }

    if(lines.length == 1){
        break;
    }

    record = 0;
}
