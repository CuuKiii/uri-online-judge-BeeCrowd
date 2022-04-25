var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines.shift());
let [a, b] = lines.shift().split(" ");

if(number >= (parseInt(a) + parseInt(b))){
    console.log("Farei hoje!");
}
else{
    console.log("Deixa para amanha!");
}
