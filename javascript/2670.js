var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var floors = [];
floors.push(parseInt(prompt()));
floors.push(parseInt(prompt()));
floors.push(parseInt(prompt()));

var minutesEachFloor = [
  floors[1] * 2 + floors[2] * 4,
  floors[0] * 2 + floors[2] * 2,
  floors[0] * 4 + floors[1] * 2,
];

console.log(Math.min(...minutesEachFloor));
