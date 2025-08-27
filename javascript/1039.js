const { readFileSync } = require("fs")
const input = readFileSync("/dev/stdin", "utf8")
	.trim()
	.split("\n")
	.map((coords) => coords.split(" ", 6).map((value) => Number.parseInt(value, 10)))

function distance(x1 = 0, y1 = 0, x2 = x1, y2 = y1) {
	return Math.hypot(x1 - x2, y1 - y2)
}

function main() {
	const output = []

	for (const [R1, X1, Y1, R2, X2, Y2] of input) {
		if (distance(X1, Y1, X2, Y2) + R2 <= R1) output.push("RICO")
		else output.push("MORTO")
	}

	console.log(output.join("\n"))
}

main()
