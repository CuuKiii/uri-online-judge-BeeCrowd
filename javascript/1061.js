var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [diaInicio, horaInicio, diaFim, horaFim] = require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .split('\n')
  .map(x => x.replace(/Dia/, ''))
  .map(x => x.replace(/\s/g, ''));

const ano = (new Date()).getFullYear();
const dataInicio = new Date(`${ano}-04-${diaInicio} ${horaInicio}`);
const dataFim = new Date(`${ano}-04-${diaFim} ${horaFim}`);
let duracao = dataFim.getTime() - dataInicio.getTime();

const dias = Math.floor(duracao / (86400000));
duracao -=  dias * (86400000);
const horas = Math.floor(duracao / (3600000));
duracao -= horas * (3600000);
const minutos = Math.floor(duracao / (60000));
duracao -= minutos * (60000);
const segundos = Math.floor(duracao / (1000));

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
