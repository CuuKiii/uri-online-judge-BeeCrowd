var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = lines[0];

var countLines = 0;
var turns = 0;

function getDirection() {
    if (turns % 4 === 0) return "N";
    else if (turns % 4 === 3 || turns % 4 === -1) return "O";
    else if (turns % 4 === 1 || turns % 4 === -3) return "L";
    else return "S";
}

do {
    turns = 0;
    countLines++;

    const commands = lines[countLines].split("").filter(elem => elem != '\r');
    
    for (let command of commands) {
        command === 'D' ? turns++ : turns--;
    }

    countLines++;

    n = lines[countLines];

    console.log(getDirection());

} while (n !== '0');
