var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let x, y, l1, arr1 = [], soma = 0;
l1 = input.split("\n")
x = parseInt(l1.shift());
y = parseInt(l1.shift());


if (x<y){
    for(i=x; x<=y; x++){
        if(x%13 !== 0 ){
            arr1.push(x)
        }
    }
}

else if(x>y){
    for(i = x; x>=y; x--){
        if(x%13!=0){
            arr1.push(x)
        }
    }
}
for(j=0;j<arr1.length;j++){
    soma += arr1[j];
}
console.log(soma)
