var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
if (prompt().length > 80) {
  console.log("NO");
} else {
  console.log("YES");
}
