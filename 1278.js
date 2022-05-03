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
         var formattedArray = [];
         for(var i = 0; i<N; i++){
             var str = lines.shift();
             str = str.trim();
             var words = str.split(' ');
             var formattedSentence = [];
             for(var j = 0; j<words.length; j++){
                 if(words[j]!==""){
                     formattedSentence.push(words[j]);
                 }
             }
             formattedSentence = formattedSentence.join(" ");
             formattedArray.push(formattedSentence);
             if(largestStringLength<formattedSentence.length){
                 largestStringLength = formattedSentence.length;
             }
         }
         for(var i = 0; i<formattedArray.length; i++){
             var str = formattedArray[i];
             var requiredSpaces = largestStringLength - str.length;
             var output = "";
             for(var j = 0; j<requiredSpaces; j++){
                 output += " ";
             }
             output+=formattedArray[i];
             console.log(output);
         }
       
     }
 }
