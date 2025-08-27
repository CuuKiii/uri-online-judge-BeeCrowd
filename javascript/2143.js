var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const values = input.split('\n').map(value => parseInt(value));

const theReturnOfRadar = (testCase) => {
    if (testCase % 2 === 0) {
        return (testCase * 2) - 2;
    } else {
        return (testCase * 2) - 1;
    }
};

while (values !== 0) {
    const T = values.shift();

    if (T === 0) {
        break;
    }

    for (let i = 0; i < T; i++) {
        const test = values.shift();
        console.log(theReturnOfRadar(test));
    }
}
