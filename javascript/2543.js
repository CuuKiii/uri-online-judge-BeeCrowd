var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [a, b] = lines.shift().trim().split(" ");
let cont = 0;

while(lines.length != 0){

    for(let i = 0; i < a; i++){
        const [id, boolean] = lines.shift().trim().split(" ");
        if(id == parseInt(b) && boolean == 0){
            cont++;
     }
    }
    console.log(cont);

    if(lines.length == 1){
        break;
    }

    [a, b] = lines.shift().trim().split(" ");
    cont = 0;
}
