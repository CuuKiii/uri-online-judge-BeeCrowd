var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length != 0){

    const airpods = parseInt(lines.shift());

    for(let i = 0; i < airpods; i++){

      let record = parseFloat(lines.shift());
      
      if(i == 0){
         tempo = record;
      }

        if(record < tempo){
          tempo = record;
        }         
    }

    console.log(tempo.toFixed(2));

    if(lines.length == 1){
        break;
    }

}
