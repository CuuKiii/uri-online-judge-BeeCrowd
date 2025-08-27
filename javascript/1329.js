var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = lines[0];

var countLines = 0;

var maryScore = 0;
var johnScore = 0;

do {
    countLines++;

    const flips = lines[countLines].split(" ");
    
    for (let flip of flips) {
        +flip === 0 ? maryScore++ : johnScore++;
    }

    countLines++;

    n = lines[countLines];

    console.log(`Mary won ${maryScore} times and John won ${johnScore} times`);

    maryScore = 0;
    johnScore = 0;

} while (n !== '0');
