var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 var firstIterationCompleted = false;
 while(true){
     var N = parseInt(lines.shift());
     if(N===0){
         break;
     }else{
         if(!firstIterationCompleted){
           firstIterationCompleted = true;
         }else{
           console.log("");
         }
         var largestStringLength = 0;
         var words = [];
         for(var i = 0; i<N; i++){
             var str = lines.shift();
             str = str.trim();
             if(largestStringLength<str.length){
                 largestStringLength = str.length;
             }
             words.push(str);
         }
         for(var i = 0; i<words.length; i++){

             var output = '';
             var requiredSpaces = largestStringLength - words[i].length;
             for(var j = 0; j<requiredSpaces; j++){
                 output+=" ";
             }
             output += words[i];
             console.log(output);
         }
     }
 }
