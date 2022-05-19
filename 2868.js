var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numbersOfInputs = Number(lines[0]);

for (let i = 1; i <= numbersOfInputs; i += 1) {
  const infos = lines[i].split(' ');
  const n1 = Number(infos[0]);
  const n2 = Number(infos[2]);
  let result = 0;

  if (infos[1] === 'x') result = n1 * n2;
  if (infos[1] === '+') result = n1 + n2;
  if (infos[1] === '-') result = n1 - n2;

  const totalRs = Math.abs(result - Number(infos[4]));

  console.log(`E${'r'.repeat(totalRs)}ou!`);
}
