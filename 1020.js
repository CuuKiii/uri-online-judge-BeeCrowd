var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    /* Variáveis */
let ItaloDias = parseInt(input);
let ItaloAnos, ItaloMeses;

/* Dados */

ItaloAnos = parseInt(ItaloDias / 365); /* Anos */
ItaloDias = ItaloDias % 365;
ItaloMeses = parseInt(ItaloDias / 30); /* Meses */
ItaloDias = ItaloDias % 30;


let resultado = `${ItaloAnos} ano(s)
${ItaloMeses} mes(es)
${ItaloDias} dia(s)`;

/* Final */

console.log(resultado);
