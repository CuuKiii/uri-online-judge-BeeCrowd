var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
input = input.replace('\n',' ');
var lines = input.split(' ');
var italo = parseInt(lines.shift());
var bitalo = parseInt(lines.shift()); 
var citalo = parseInt(lines.shift()); 

    if(italo > bitalo && italo > citalo)
    {
        if(bitalo > citalo)
        {
            console.log(citalo);
            console.log(bitalo);
            console.log(italo);
        }
        else
        {
            console.log(bitalo);
            console.log(citalo);
            console.log(italo);
        }
    }
    else if(bitalo > citalo && bitalo > italo)
    {
        if(italo > citalo)
        {
            console.log(citalo);
            console.log(italo);
            console.log(bitalo);
        }
        else
        {
            console.log(italo);
            console.log(citalo);
            console.log(bitalo);
        }
    }
    else
    {
        if(italo > bitalo)
        {
            console.log(bitalo);
            console.log(italo);
            console.log(citalo);
        }
        else
        {
            console.log(italo);
            console.log(bitalo);
            console.log(citalo);
        }
    }
    console.log("\n" + italo);
    console.log(bitalo);
    console.log(citalo);
