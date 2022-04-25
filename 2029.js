var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
do{
    let volume = lines.shift();
    let diametro = lines.shift();

    altura = volume / (Math.pow((diametro / 2),2) * 3.14);
    area = Math.pow((diametro / 2),2)  * 3.14;

    console.log(`ALTURA = ${altura.toFixed(2)}\nAREA = ${area.toFixed(2)}`);

}while(0 < lines.length);
