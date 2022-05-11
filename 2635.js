var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
const searchedSize = parseInt(prompt("answers"));
var searched = [];

for (let i = 0; i < searchedSize; i++) {
  searched.push(prompt());
}

const querySize = parseInt(prompt("queries"));

for (let i = 0; i < querySize; i++) {
  let query = prompt();
  let suggestions = 0;
  let suggestionSize = 0;

  for (let word of searched) {
    if (query == word.substring(0, query.length)) {
      suggestions++;
      suggestionSize = Math.max(suggestionSize, word.length);
    }
  }

  if (suggestions == 0) {
    console.log(-1);
  } else {
    console.log(suggestions + " " + suggestionSize);
  }
}
