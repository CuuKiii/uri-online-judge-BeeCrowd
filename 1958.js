var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var Nstring = prompt();
var Nfull = parseFloat(Nstring);


N = Nfull.toExponential(4);
N = N.toString().replace(/e/, "E");
if (Nfull >= 0) {
  N = "+" + N;
}

var exp = N.slice(9);
if (exp < 10) {
  N = N.substring(0, N.length - 1) + "0" + N.substring(N.length - 1, N.length);
}

if (Nstring == "-0") {
  console.log("-0.0000E+00");
} else {
  console.log(N);
}
