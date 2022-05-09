var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const casos = parseInt(prompt());
var msg, cdg, ecrpt;
for (let i = 0; i < casos; i++) {
  msg = prompt();
  cdg = [];
  ecrpt = "";

  for (let j = 0; j < msg.length; j++) {
    cdg.push(msg.charCodeAt(j));
    if ((64 < cdg[j] && cdg[j] < 91) || (96 < cdg[j] && cdg[j] < 123)) {
      cdg[j] += 3;
    }
  }

  cdg.reverse();

  for (let j = Math.trunc(cdg.length / 2); j < cdg.length; j++) {
    cdg[j] -= 1;
  }

  for (let item of cdg) {
    ecrpt += String.fromCharCode(item);
  }

  console.log(ecrpt);
}
