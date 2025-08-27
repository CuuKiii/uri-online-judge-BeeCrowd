var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
	
	var testes = parseInt(prompt("nmr de testes"));
	var pontosjoao = 0;
	var pontosmaria = 0;
	var somajoao = 0;
	var somamaria = 0;
	var z;
	var j;
	var i;

for(z = 0; z < testes ; z++){
		for( i = 0 ; i <3 ; i++){
		var x = prompt(" ");
			var [a,b] = x.split(' ');
			a = parseInt(a);
			b = parseInt(b);
			pontosjoao = a*b;
			somajoao += pontosjoao;

		}
		for( j = 0 ; j <3 ; j++){
		var k = prompt(" ");
			var [c,d] = k.split(' ');
			c = parseInt(c);
			d = parseInt(d);
			pontosmaria = c*d;
			somamaria += pontosmaria;
		}

	if(somajoao > somamaria){
		console.log("JOAO");
			somamaria = 0;
			somajoao = 0;
	} else{
		console.log("MARIA");
			somamaria = 0;
			somajoao = 0;
	  }
	
}
