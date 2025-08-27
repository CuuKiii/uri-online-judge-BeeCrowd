var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const seperateWord = (arr) => arr.shift().split("").join(" ").split("");

while (lines.length !== 0) {
  let word = seperateWord(lines);
  for (let i = 0; i < word.length; i++) {
    console.log(word.join(""));
    word.pop();
    word.pop();
    word.unshift(" ");
  }
  console.log("");
}
