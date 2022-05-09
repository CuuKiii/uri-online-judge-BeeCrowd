var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const cases = parseInt(prompt());
for (let j = 1; j <= cases; j++) {
  var [num, step] = prompt().split(" ").map(Number);
  var people = [];
  var counter = -1;

  for (let i = 1; i <= num; i++) {
    people.push(i);
  }

  while (people.length > 1) {
    for (let i = 0; i < step; i++) {
      counter++;
      if (counter >= people.length) {
        counter = 0;
      }
    }

    people.splice(counter, 1);
    counter--;
  }

  console.log(`Case ${j}: ${people[0]}`);
}
