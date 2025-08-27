var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift()};
var [o, i] = (prompt(' ').split(' ').map(Number))
if(o<0||o>432||i<-468||i>468||i<0){
    console.log("fora")
}else{
    console.log("dentro")
}
