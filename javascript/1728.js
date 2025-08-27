var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var count = 0;
var running = true;

function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseAndCheck(line) {
    let ended = false;
    let check = false;

    let [exp, result] = line.split("=");
    let [v1, v2] = exp.split("+");

    v1 = +reverseString(v1);
    v2 = +reverseString(v2);
    result = +reverseString(result);

    check = (+v1) + (+v2) === +result;
    check = check ? "True" : "False";

    if(v1 === 0 && v2 === 0 && result === 0)
        ended = true;

    return { ended, check };
}

do {
    const { ended, check } = reverseAndCheck(lines[count]);
    console.log(check);
    count++;

    running = !ended;
} while (running);
