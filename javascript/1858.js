var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines.shift());
var arr = lines.shift().split(' ').map(input=>parseInt(input));

var position = 0;
var smallest = arr[0];

for(var i = 1; i<arr.length; i++){
    if(arr[i]<smallest){
        smallest = arr[i];
        position = i;
    }
}

console.log(position + 1);
