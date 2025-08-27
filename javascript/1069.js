const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    let n = parseInt(input[0]);
    for (let i = 1; i <= n; i++) {
        let str = input[i];
        let stack = [];
        let diamantes = 0;

        for (let c of str) {
            if (c === "<") {
                stack.push(c);
            } else if (c === ">") {
                if (stack.length > 0) {
                    stack.pop();
                    diamantes++;
                }
            }
        }

        console.log(diamantes);
    }
});
