var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sal = Number(lines[0]);
var salnovo;

if(sal <= 400.00){
    salnovo = sal*1.15;
    console.log('Novo salario: ' +salnovo.toFixed(2));
    console.log('Reajuste ganho: ' +(sal*0.15).toFixed(2));
    console.log('Em percentual: ' +'15 %');
}else if(sal <= 800.00){
    salnovo = sal*1.12;
    console.log('Novo salario: ' + salnovo.toFixed(2));
    console.log('Reajuste ganho: ' + (sal*0.12).toFixed(2));
    console.log('Em percentual: ' +'12 %');
}else if(sal <= 1200.00){
    salnovo = sal*1.10;
    console.log('Novo salario: ' + salnovo.toFixed(2));
    console.log('Reajuste ganho: ' + (sal*0.10).toFixed(2));
    console.log('Em percentual: ' +'10 %');
}else if(sal <= 2000.00){
    salnovo = sal*1.07;
    console.log('Novo salario: ' +salnovo.toFixed(2));
    console.log('Reajuste ganho: ' +(sal*0.07).toFixed(2));
    console.log('Em percentual: ' +'7 %');
}else if(sal > 2000.00){
    salnovo = sal*1.04;
    console.log('Novo salario: ' +salnovo.toFixed(2));
    console.log('Reajuste ganho: ' +(sal*0.04).toFixed(2));
    console.log('Em percentual: ' +'4 %');
}
