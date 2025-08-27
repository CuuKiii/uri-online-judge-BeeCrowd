var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [arroz, beijinho] = lines.shift().trim().split(" ");

if(arroz == beijinho){
    console.log(arroz);
}
else{
    parseInt(arroz) > parseInt(beijinho) ? console.log(arroz) : console.log(beijinho);
}
