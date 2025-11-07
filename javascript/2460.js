const { readFileSync } = require("fs")
const lines = readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map((line) => line.split(" ").map((value) => Number.parseInt(value, 10)))

const N = lines[0][0]
const M = lines[2][0]

const inQueue = lines[1].slice(0, N)
const outQueue = lines[3].slice(0, M)

const stillInQueue = inQueue.filter((p) => !outQueue.includes(p))

console.log(stillInQueue.join(" "))
