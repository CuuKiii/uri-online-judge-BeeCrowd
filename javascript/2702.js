var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sep1 = lines.shift().split(' ');
var sep2 = lines.shift().split(' ');
var com = parseInt(sep1[0]);
var com2 = parseInt(sep1[1]);
var com3 = parseInt(sep1[2]);
var p = parseInt(sep2[0]);
var p2 = parseInt(sep2[1]);
var p3 = parseInt(sep2[2]);
var fim = 0;

if(p-com >= 0)
{
    fim += p-com;
}
if(p2-com2 >= 0)
{
    fim += p2-com2;
}
if(p3-com3 >= 0)
{
    fim += p3-com3;
}
console.log(fim);
