var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const values = input.split(/\s+/).map(value => parseInt(value));
const [N, M] = values.splice(0, 2);

const forceAwakens = (lines, columns) => {
    const terrain = [];

    for (let i = 0; i < lines; i++) {
        terrain.push(values.splice(0, columns));
    }

    let line = 0;
    let column = 0;

    for (let i = 1; i < lines - 1; i++) {
        for (let j = 1; j < columns - 1; j++) {
            if (terrain[i][j] === 42) {
                if (terrain[i - 1][j - 1] === 7 && terrain[i - 1][j] === 7 && terrain[i - 1][j + 1] === 7) {
                    if (terrain[i][j - 1] === 7 && terrain[i][j + 1] === 7) {
                        if (terrain[i + 1][j - 1] === 7 && terrain[i + 1][j] === 7 && terrain[i + 1][j + 1] === 7) {
                            line = i + 1;
                            column = j + 1;
                            return `${line} ${column}`;
                        }
                    }
                }
            }
        }
    }

    return `${line} ${column}`;
};

console.log(forceAwakens(N, M));
