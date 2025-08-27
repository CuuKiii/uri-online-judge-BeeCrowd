var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 var N = parseInt(lines.shift());
 for(var i = 0; i<N; i++){
     var [A, B] = lines.shift().split(' ').map(input => input);
 
     if(B.length > A.length){
         console.log('nao encaixa');
     }else{
         var matched = true;
         var k = 0;
         for(var j = B.length; j>=0; j--){
             if(B[j] !== A[A.length-k]){
                 matched = false;
                 break;
             }
             k++;
         }
         if(matched){
             console.log('encaixa');
         }else{
             console.log('nao encaixa');
         }
     }
 }
