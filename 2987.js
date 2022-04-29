var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const letter = lines.shift().trim().toLocaleLowerCase();
const alphabet = "abcdefghijklmnopqrstuvwxyz";

for(let i = 0; i <= alphabet.length; i++){
    if(letter == alphabet[i]){
        console.log(i + 1);
    }
}
