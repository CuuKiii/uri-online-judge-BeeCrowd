var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.shift().split(" ");
let X = parseInt(x);
let Y = parseInt(y);
let i;
let text = "";
let sum = 0;

while(true){
  if(X <= 0 || Y <= 0){
    return;
  }
  if (X > Y) {
    i = Y;
    for(i; i <= X; i++){
        if(i == Y){
          text = text + i;
          sum += i;
        }
        else
        {text = text + " " + i;
        sum += i;}
      }
    console.log(`${text} Sum=${sum}`)
  }

  else if(Y > X) {
    i = X;
    for(i; i <= Y; i++){
      if(i == X){
        text = text + i;
        sum += i;
      }
      else
       { text = text + " " + i;
        sum += i;}
    }
    console.log(`${text} Sum=${sum}`)
  }

  else if (X == Y){
    console.log(`${X} Sum=${X}`);
  }

  [x, y] = lines.shift().split(" ");
  X = parseInt(x);
  Y = parseInt(y);
  text = "";
  sum = 0;
}
