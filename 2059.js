var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var inicial = prompt("Digite os Valores").split(" ").map(Number)
var soma,imparpar
const p = inicial[0];
const j1 = inicial[1];
const j2 = inicial[2];
const r = inicial[3];
const a = inicial[4];
soma = j1 + j2
if (soma %2 == 0){
		parimpar = 0; // par
	}else{
		parimpar = 1; // impar
	}
// Ganhador 1
if (p == 1 && parimpar == 0 && r ==0 && a==0){// p == 1 par jogador 1
		console.log("Jogador 1 ganha!");
	}else if (p == 0 && parimpar == 1 && r ==0 && a ==0 ){ // p ==0 impar jogador 1
		console.log("Jogador 1 ganha!");
	}else if (r ==1 && a ==0){// Jogador 1 roubou
		console.log("Jogador 1 ganha!");
	}else if (r == 1 && a == 1){//Acusou o roubo
		console.log("Jogador 2 ganha!");
	}else if (p==1 && parimpar == 1 && r ==0 && a==0){
		console.log("Jogador 2 ganha!");
	}else if (p==0 && parimpar ==0 && r ==0 && a==0){
	    console.log("Jogador 2 ganha!");
	}else if (r ==0 && a ==1){
		console.log("Jogador 1 ganha!");
	}
	
