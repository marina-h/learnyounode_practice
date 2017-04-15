var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var lines = data.split('\n').length - 1;
  console.log(lines);
});
