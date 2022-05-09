var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; lines[i]; i += 1) {
  let actual = lines[i];
  actual = actual.replace(/_(.*?)_/g, '<i>$1</i>');
  actual = actual.replace(/\*(.*?)\*/g, '<b>$1</b>');

  console.log(actual);
}
