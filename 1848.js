var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 var count = 0;
 var total = 0;
 while(count!=3){
     var value = lines.shift();
     if(/caw/i.test(value)){
         console.log(total);
         total = 0;
         count++;
     }else{
         var binary = '';
         for(var i = 0; i<value.length; i++){
             if(value[i]=='*'){
                 binary += '1';
             }else{
                 binary += '0';
             }
         }
         var num = parseInt(binary,2);
         total += num;
     }
 }
 
 
