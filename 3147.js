var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [h, e, a, o , w, x] = lines.shift().split(" ")

if((parseInt(h) + parseInt(e) + parseInt(a) + parseInt(x) ) >= (parseInt(o) + parseInt(w))){
  console.log("Middle-earth is safe.");
}
else{
  console.log("Sauron has returned.");
} 
