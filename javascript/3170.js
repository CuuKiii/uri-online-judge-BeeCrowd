var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var y = parseInt(prompt(""))
var k = Math.trunc(y/2) - x

if(k <= 0){
    console.log("Amelia tem todas bolinhas!")
}else{
    console.log("Faltam " + k + " bolinha(s)")
}
