var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.split("\n");
var A = parseFloat (valores.shift());
var B = parseFloat (valores.shift());
var media = (A * 3.5 + B * 7.5) / 11.0;
console.log("MEDIA = "+ media.toFixed(5));
