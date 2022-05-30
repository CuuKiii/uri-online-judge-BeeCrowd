var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var numero=Number(prompt());
var quadrado=numero**2;

if(quadrado%2==0){
    var valor=quadrado/2;
    console.log(valor+' casas brancas e '+valor+' casas pretas')
}else{
    var valor=(quadrado-1)/2;
    console.log((valor+1)+' casas brancas e '+valor+' casas pretas')
}
