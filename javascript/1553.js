var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; lines[i] !== '0 0'; i += 2) {
  const [_, nR] = lines[i].split(' ');
  const obj = {};
  const questions = lines[i + 1].split(' ').sort((a, b) => +a - +b)
  
  questions.forEach(num => obj[num] ? obj[num] += 1 : obj[num] = 1)

  let r = 0;
  Object.values(obj).forEach(v => v >= nR ? r += 1 : 0)
  console.log(r)
}
