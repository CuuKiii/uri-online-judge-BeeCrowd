var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

function isPlate(plate) {
  if (plate.charAt(3) != "-") {
    return false;
  } else {
    let [str, num] = plate.split("-");

    if (
      str.length == 3 &&
      num.length == 4 &&
      str == str.toUpperCase() &&
      Number.isInteger(parseInt(num)) &&
      isNaN(str.charAt(0)) &&
      isNaN(str.charAt(1)) &&
      isNaN(str.charAt(2))
    ) {
      return true;
    } else {
      return false;
    }
  }
}

const restrictions = {
  1: "MONDAY",
  2: "MONDAY",
  3: "TUESDAY",
  4: "TUESDAY",
  5: "WEDNESDAY",
  6: "WEDNESDAY",
  7: "THURSDAY",
  8: "THURSDAY",
  9: "FRIDAY",
  0: "FRIDAY",
};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var plate = prompt();

  if (isPlate(plate)) {
    let lastDigit = plate.charAt(7);
    console.log(restrictions[lastDigit]);
  } else {
    console.log("FAILURE");
  }
}
