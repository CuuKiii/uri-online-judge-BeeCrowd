var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var line = lines.shift().split(" ");
var italo = parseFloat(line[0]);
var thales = parseFloat(line[1]);
var cocadas = parseFloat(line[2]);
var maior;
var soma;
var tritalo;

if (italo > thales && italo > cocadas) maior = italo;
else if (thales > cocadas) maior = thales;
else maior = cocadas;

if (maior == italo) soma = thales + cocadas;
else if (maior == thales) soma = italo + cocadas;
else soma = thales + italo;

if (soma > maior) tritalo = true;
else tritalo = false;

if (tritalo) {
    var peritalo = italo + thales + cocadas;
    console.log('Perimetro = ' + peritalo.toFixed(1));
} else {
    var areaItalo = ((italo + thales) * cocadas) / 2;
    console.log('Area = ' + areaItalo.toFixed(1));
}
