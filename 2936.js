var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let sum = 0;

for(let i = 0; i < 5; i++){
    let eat = parseInt(lines.shift());

    switch(i){
        case 0:
            sum += 300 * eat;
            break;
        case 1:
            sum += 1500 * eat;
            break;
        case 2:
            sum += 600 * eat;
            break;
        case 3:
            sum += 1000 * eat
            break;
        case 4:
            sum += 150 * eat
            break;
    }
   
}

console.log(sum + 225);
