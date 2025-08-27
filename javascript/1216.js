var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const arr = [];

for (let i=1;lines[i];i+=2){
    const t = lines[i]
    arr.push(t)
}
console.log(
    (arr.reduce((acc, curr)=> acc + Number(curr), 0)/ arr.length).toFixed(1)
)
