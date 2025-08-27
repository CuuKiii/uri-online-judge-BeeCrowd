var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for(let i = 0; lines[i]; i += 2) {
  const bacDNA = lines[i]
  const resistDNA = lines[i+1]
  if(bacDNA.includes(resistDNA)) console.log('Resistente')
  else console.log('Nao resistente')
}
