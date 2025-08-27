var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let fib=[0,1];
let calls=[0,0];
for(let i=2;i<=39;i++){
  fib[i]=fib[i-1]+fib[i-2];
  calls[i]=calls[i-1]+calls[i-2]+2;
}
let N = parseInt(lines.shift());
for(let i=0;i<N;i++){
  let x= parseInt(lines.shift());
  console.log(`fib(${x}) = ${calls[x]} calls = ${fib[x]}`);
}
