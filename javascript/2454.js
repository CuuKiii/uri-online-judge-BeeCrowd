var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var x = prompt("digite as entradas");
		var [p,r] = x.split(" ");

		p = parseInt(p);
		r = parseInt(r);

	if(p === 0 && r === 0){
		console.log("C");
	}

	else if(p === 0 && r === 1){
		console.log("C");
	}

	else if(p === 1 && r === 0){
		console.log("B");
	}

	else{
		console.log("A");
	}
