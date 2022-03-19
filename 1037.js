var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var italo = parseFloat(lines.shift());

if (italo >= 0 && italo <= 25) {
    console.log('Intervalo [0,25]');
} else if (italo > 25 && italo <= 50) { 
    console.log('Intervalo (25,50]');
} else if (italo > 50 && italo <= 75) { 
    console.log('Intervalo (50,75]');
} else if (italo > 75 && italo <= 100) { 
    console.log('Intervalo (75,100]');
}else { 
    console.log('Fora de intervalo');
}
