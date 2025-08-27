var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var operation = lines.shift();
 var positions = [];
 var value = 0;
 for(var i = 0; i<5; i++){
    value = i * 12;
    for(var j = i+1; j<11-i; j++){
        positions.push(value + j);
    }
 }
 var sum = 0;
 var count = 0;
 
 for(var i = 0; i<144; i++){
     var num = parseFloat(lines.shift());
     if(positions.indexOf(i)!=-1){
         sum += num;
         count++;
     }
 }
 
 if(operation=='S'){
     console.log(sum.toFixed(1));
 }else{
     console.log((sum/count).toFixed(1));
 }
