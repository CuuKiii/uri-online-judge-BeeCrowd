const readline = require("readline");

class Pilha {
    constructor() {
        this.vetor = [];
    }

    push(valor) {
        this.vetor.push(valor);
    }

    pop() {
        return this.vetor.pop();
    }

    topo() {
        return this.vetor[this.vetor.length - 1];
    }

    isEmpty() {
        return this.vetor.length === 0;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(...line.trim().split(" ").map(Number));
}).on("close", () => {
    let idx = 0;

    while (true) {
        let vagoes = input[idx++];
        if (vagoes === 0) break;

        while (true) {
            let p = new Pilha();
            let entrando = 1;
            let deuruim = false;
            let zero = false;

            for (let i = 0; i < vagoes && !deuruim && !zero; i++) {
                let fora = input[idx++];

                if (fora === 0) {
                    zero = true;
                    break;
                }

                while (true) {
                    if (fora === entrando) {
                        entrando++;
                        break;
                    } else if (fora > entrando) {
                        p.push(entrando);
                        entrando++;
                    } else {
                        if (!p.isEmpty() && p.topo() === fora) {
                            p.pop();
                        } else {
                            deuruim = true;
                            // descartar entradas restantes da linha
                            for (; i < vagoes - 1; i++) idx++;
                        }
                        break;
                    }
                }
            }

            if (!zero) {
                if (!deuruim) {
                    console.log("Yes");
                } else {
                    console.log("No");
                }
            } else {
                break;
            }
        }
        console.log();
    }
});
