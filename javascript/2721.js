var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const reindeers = {
  1: "Dasher",
  2: "Dancer",
  3: "Prancer",
  4: "Vixen",
  5: "Comet",
  6: "Cupid",
  7: "Donner",
  8: "Blitzen",
  0: "Rudolph",
};

const snowballs = prompt().split(" ").map(Number);
const totalSum = snowballs.reduce((previous, current) => previous + current);
const rest = totalSum % 9;

console.log(reindeers[rest]);
