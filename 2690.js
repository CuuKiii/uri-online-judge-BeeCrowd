var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const dic = {
  0: 'GQaku',
  1: 'ISblv',
  2: 'EOYcmw',
  3: 'FPZdnx',
  4: 'JTeoy',
  5: 'DNXfpz',
  6: 'AKUgq',
  7: 'CMWhr',
  8: 'BLVis',
  9: 'HRjt',
}

const n = Number(lines[0]);

for(let i = 1; i <= n; i += 1) {
  const str = lines[i];

  let newStr = "";

  for(let c of str) {
    if(newStr.length >= 12) break;
    for(let j = 0; j <= 9; j += 1) {
      if(dic[j].includes(c)) newStr += j;
    }
  }

  console.log(newStr);
} 
