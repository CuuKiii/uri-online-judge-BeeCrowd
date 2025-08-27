var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var i;
var v = [];
var qtde = parseInt(prompt("qntde de paises analisados"));
var aux;
var j;

for(i = 0; i < qtde ;i++){

	var x = prompt("nome/ouro/prata/bronze");
		var [nome,ouro,prata,bronze] = x.split(" ");

		v[i] = {
		nome: nome,
		ouro: ouro*1,
		prata: prata*1,
		bronze: bronze*1
	};	
}
for (var i = 0; i < v.length-1; i++) {
    for (var j = 0; j < v.length-1-i; j++) {
        if (v[j].ouro > v[j+1].ouro) {
            aux = v[j];
            v[j] = v[j+1];
            v[j+1] = aux;
        }else if(v[j].ouro == v[j+1].ouro){
            if(v[j].prata > v[j+1].prata){
                aux = v[j];
                v[j] = v[j+1];
                v[j+1] = aux;
            }else if(v[j].prata == v[j+1].prata){
                if(v[j].bronze > v[j+1].bronze){
                    aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;
                }
            }
        }
    }
}

for(var z = 0; z < qtde; z++){
	console.log(v[v.length-1-z].nome+" "+v[v.length-1-z].ouro+" "+v[v.length-1-z].prata+" "+v[v.length-1-z].bronze);
}
