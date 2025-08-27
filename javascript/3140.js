var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift(); };

var exit = false
while(true){
    var x = prompt("")
    if(x.match("<body>")){
        while(true){
            var y = prompt("")
            if(y.match("</body>")){
                exit = true
                break
            }
            console.log(y)
        }
    }
    if(exit){
        break
    }
}
