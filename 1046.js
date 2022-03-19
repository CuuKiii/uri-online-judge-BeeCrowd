var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var italoini = parseInt(line[0]);
var italonal = parseInt(line[1]);
if (italoini > italonal) { 
    console.log('O JOGO DUROU ' + (24 - (italoini - italonal)) + ' HORA(S)');
} else if (italonal > italoini) {
    console.log('O JOGO DUROU ' + (italonal - italoini) + ' HORA(S)');
} else {
   console.log('O JOGO DUROU 24 HORA(S)');
}
