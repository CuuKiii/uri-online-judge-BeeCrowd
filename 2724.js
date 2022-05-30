var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isDangerous(C) {
  for (let element of dangerous) {
    if (C.includes(element)) {
      let aux = C.split(element);

      for (let m = 1; m < aux.length; m++) {
        if (upperCases.includes(aux[m].charAt(0))) {
          return true;
        }
      }
    }
  }

  return false;
}

const testCases = parseInt(prompt("testCases"));

for (let i = 0; i < testCases; i++) {
  var dangerousAmmount = parseInt(prompt("dangerousSize"));
  var dangerous = [];
  for (let n = 0; n < dangerousAmmount; n++) {
    dangerous.push(prompt());
  }

  var compoundsAmmount = parseInt(prompt("compoundsSize"));
  for (let n = 0; n < compoundsAmmount; n++) {
    var compound = prompt();

    if (isDangerous(compound)) {
      console.log("Abortar");
    } else {
      console.log("Prossiga");
    }
  }

  if (i != testCases - 1) {
    console.log("");
  }
}
