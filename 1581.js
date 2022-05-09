var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines.shift());

for(var i = 0; i<N; i++){
    var k = parseInt(lines.shift());
    var isSame = true;
    var firstLanguage = '';
    for(var j = 0; j<k; j++){
        var language = lines.shift();
        if(j===0){
            firstLanguage = language;
        }else{
            if(language !== firstLanguage){
                isSame = false;
            }
        }
    }
    if(isSame){
        console.log(firstLanguage);
    }else{
        console.log('ingles');
    }
}
