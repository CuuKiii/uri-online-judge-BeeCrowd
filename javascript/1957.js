var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const { parse } = require("path");


let v = parseInt(input);
console.log(v.toString(16).toUpperCase());
