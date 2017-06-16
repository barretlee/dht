var expect = require('expect.js');
var path = require('path');
var fs = require('fs');

global.expect = expect;
global.path = path;
global.fs = fs;

global.srequire = function (file) {
  var relativePath = path.join(__dirname, '../', 'file');
  if (fs.existsSync(relativePath)) {
    return require(relativePath);
  } else {
    return require(file);
  }
};
