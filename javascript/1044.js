var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var italo = lines.shift().split(" ");
var thales = parseInt(italo[0]);
var cocadas = parseInt(italo[1]);

if (thales % cocadas == 0 || cocadas % thales == 0) 
    console.log('Sao Multiplos');
else 
    console.log('Nao sao Multiplos');
