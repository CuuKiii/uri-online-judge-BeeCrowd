var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
while (true) {
  var inp = prompt("input").split("");
  if (isNaN(inp[0])) {
    break;
  }

  var [size, cases] = inp.join("").split(" ");
  var C1 = prompt("C1").split("");
  var C2 = prompt("C2").split("");
  var table = new Map();

  for (let i = 0; i < size; i++) {
    table.set(C1[i], C2[i]);
    table.set(C1[i].toLowerCase(), C2[i].toLowerCase());
    table.set(C2[i], C1[i]);
    table.set(C2[i].toLowerCase(), C1[i].toLowerCase());
  }

  for (let i = 0; i < cases; i++) {
    var cipher = prompt("cipher").split("");

    for (let i = 0; i < cipher.length; i++) {
      if (table.has(cipher[i])) {
        cipher[i] = table.get(cipher[i]);
      }
    }
    console.log(cipher.join(""));
  }
  console.log("");
}
