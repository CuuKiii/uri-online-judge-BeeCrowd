var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; lines[i]; i++) {
  const actual = lines[i];
  const idx = actual
    .split('')
    .reduce((acc, v, i) => (v === ' ' ? [...acc, i] : acc), []);
  const str = actual.split('').filter((v, i) => !idx.includes(i));

  const res = str.map((v, i) =>
    i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()
  );

  idx.forEach((v) => res.splice(v, 0, ' '));

  console.log(res.join(''));
}
