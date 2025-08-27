var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var q = +lines[0];
var votes = lines[1].split(" ");

var favor = 0;
var against = 0;

for (let i = 0; i < q; i++) {
    votes[i] == "1" ? against++ : favor++;
}

const result = favor > against ? "Y" : "N";

console.log(result);
