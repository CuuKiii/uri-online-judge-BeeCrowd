var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const dic = {
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
}

for(let i = 0; i < lines.length; i += 1) {
  const str = lines[i];
  let newStr = "";
  for(let c of str) {
    if(/[0-9\*\#]/.test(c)) newStr += c;
    else if(c !== '-') {
      for(let j = 2; j <= 9; j += 1) {
        if(dic[j].includes(c.toUpperCase())) newStr += j;
      }
    }
  }

  console.log(newStr);
}
