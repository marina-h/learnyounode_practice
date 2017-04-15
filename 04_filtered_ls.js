var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, list) {
  if (err) {
    return console.error(err);
  }
  list.forEach(function(dir) {
    if (path.extname(dir) === ext) {
      console.log(dir);
    }
  });
});
