var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines.shift();
let i = 0;
let year = lines.shift();

while(i < number){
    if(year >= 2015){
        console.log(`${year - 2014} A.C.`);
    }

    else if( year < 2015){
        console.log(`${2015 - year} D.C.`);
    }

    year = lines.shift();
    i++
}
