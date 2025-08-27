var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const[a, b] = lines.shift().split(" ");
const canos = lines.shift().split(" ");
let temp
let cont = 0;
temp = canos[0];
for(let i = 0; i < canos.length, i < parseInt(b); i++){
    if(i==0){
        temp = canos[0]
    }
    else{
        if(temp>canos[i]){
            if((temp-canos[i])>a){
                cont++;
                break;
            }
            else{temp=canos[i];}
        }
        else{
        if((canos[i]-temp)>a){
            cont++;
            break;
        }else{temp=canos[i];};
    }
    }
    
}
if(cont!=0){
    console.log("GAME OVER")
}
else{
    console.log("YOU WIN")
}
