var fs = require('fs');

var filename = process.argv[2];
// var contents = fs.readFileSync(filename);
// var lines = contents.toString().split('\n').length - 1;

// Or use utf-8 encoding:
var contents = fs.readFileSync(filename, 'utf8');
var lines = contents.split('\n').length - 1;
console.log(lines);
