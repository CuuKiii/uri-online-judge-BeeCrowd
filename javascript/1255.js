var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0])

for(let i = 1; i <= n; i += 1) {
  const obj = {};
  const phrase = lines[i].replace(/[^A-Za-z]/g, '').toLowerCase()
  phrase.split('').forEach(letter => obj[letter] ? obj[letter] += 1 : obj[letter] = 1)
  const letters = Object.entries(obj)
  const highest = Math.max(...letters.map(v => v[1]))

  const result = letters.filter(v => v[1] === highest).map(v => v[0]).sort((a, b) => a.localeCompare(b))
  console.log(result.join(''))
}
