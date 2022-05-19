var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var vet = [];
var aux;
var i;

var poevet = 0;


while (!isNaN(poevet)) {		
			var qtde = parseInt(prompt("quantos vao ser analisados"));
			 if(isNaN(qtde)){
			 	break;
			 }
			for(i = 0; i<qtde ; i++){
				var adicional = "";
					poevet = parseInt(prompt("digite um numero"));
						


					if(!isNaN(poevet)){
					poevet = "" + poevet

						for(z = 0; z < 4 - poevet.length; z++){
							adicional += "0"
						}
						poevet = adicional + poevet;

							vet.push(poevet);
					} else{
						break;
					  }
			}
			for(var i = 0; i < vet.length-1; i++){
				for(var j = 0; j < vet.length-1-i; j++){
					if(parseInt(vet[j]) > parseInt(vet[j+1])){
						aux = vet[j];
						vet[j] = vet[j+1];
						vet[j+1] = aux;
					}
				}
			}
	for(var d = 0; d < vet.length ; d++){
			console.log(vet[d]);
	}
vet = [];
}
