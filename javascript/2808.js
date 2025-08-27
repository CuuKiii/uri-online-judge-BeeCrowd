var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const table = new Map();
table.set("a", 1);
table.set("b", 2);
table.set("c", 3);
table.set("d", 4);
table.set("e", 5);
table.set("f", 6);
table.set("g", 7);
table.set("h", 8);

var [knight, target] = prompt().split(" ");
knight = knight.split("");
target = target.split("");

knight[0] = table.get(knight[0]);
target[0] = table.get(target[0]);

knight.map(Number);
target.map(Number);

if (
  Math.pow(target[0] - knight[0], 2) + Math.pow(target[1] - knight[1], 2) ==
  5
) {
  console.log("VALIDO");
} else {
  console.log("INVALIDO");
}
