var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

const table = {
  fire: {
    dmg: 200,
    1: 20,
    2: 30,
    3: 50,
  },
  water: {
    dmg: 300,
    1: 10,
    2: 25,
    3: 40,
  },
  earth: {
    dmg: 400,
    1: 25,
    2: 55,
    3: 70,
  },
  air: {
    dmg: 100,
    1: 18,
    2: 38,
    3: 60,
  },
};

var cases = parseInt(prompt());



for (let i = 0; i < cases; i++) {
  var [width, height, minX, minY] = prompt().split(" ").map(Number);
  var [spell, lvl, centerX, centerY] = prompt().split(" ");
  [centerX, centerY] = [centerX, centerY].map(Number);

  var [maxX, maxY] = [minX + width, minY + height];

  var distanceX = Math.max(minX - centerX, 0, centerX - maxX);
  var distanceY = Math.max(minY - centerY, 0, centerY - maxY);
  var totalDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  if (totalDistance <= table[spell][lvl]) {
    console.log(table[spell].dmg);
  } else {
    console.log(0);
  }
}
