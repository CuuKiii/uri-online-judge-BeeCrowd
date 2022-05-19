var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  const nums = lines[i].split(' ').map(Number);
  const x = nums[0];
  const y = nums[1];

  const rafael = (3 * x) ** 2 + y ** 2;
  const beto = 2 * x ** 2 + (5 * y) ** 2;
  const carlos = -100 * x + y ** 3;

  const maxValue = Math.max(rafael, beto, carlos);

  if (maxValue === rafael) console.log('Rafael ganhou');
  if (maxValue === beto) console.log('Beto ganhou');
  if (maxValue === carlos) console.log('Carlos ganhou');
}
// OUTRA RESOLUÇÃO 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var E = parseInt(prompt());
for(i = 0; i<E; i++)
{
var [x, y] = prompt().split(" ").map(Number);
var R = ((3*x)*(3*x))+(y*y);
var B = (2*(x*x))+((5*y)*(5*y));
var C = (-100*x) + (y*y*y);

if(C>R && C>B){console.log("Carlos ganhou");}
if(R>C && R>B){console.log("Rafael ganhou");}
if(B>C && B>R){console.log("Beto ganhou");}
}
