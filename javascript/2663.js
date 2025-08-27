var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines.shift());
const ranking = parseInt(lines.shift());
let cont = 0;
let people = [];
for(let i = 0; i < number; i++){
    let person = lines.shift().trim();
    people.push(person);
}
people.sort((a,b) => a - b).reverse();

for(let j = ranking ; j < people.length; j++){
    if(people[ranking - 1] == people[j]){
        cont++
    }
}
console.log(ranking + cont);
