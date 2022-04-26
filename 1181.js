var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.split('\n');
const [line, character] = values.splice(0, 2);

let sum = 0;
let count = 0;

for (let xArray = 0; xArray < 12; xArray++) {
    for (let yArray = 0; yArray < 12; yArray++) {
        const number = parseFloat(values.shift());

        if (xArray === parseInt(line)) {
            count += 1;
            sum += number;
        }
    }
}

const result = character.toUpperCase() === 'S' ? sum.toFixed(1) : (sum / count).toFixed(1);
console.log(result);
