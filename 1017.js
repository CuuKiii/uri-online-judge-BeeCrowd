var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [PeriodosDoItalo, PiqueDoItalo] = input.split("\n"); /* Variáveis dos valores*/

const SaguadinItalo = PeriodosDoItalo * PiqueDoItalo; /* Variável do total*/
const GasosaGasta = SaguadinItalo / 12; /* Quantidade de Combustível*/

console.log(GasosaGasta.toFixed(3));
