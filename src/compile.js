var fs = require('fs');

var Handlebars = require('handlebars');

JSON.stringifyAligned = require('json-align');

// pretty print a json document
Handlebars.registerHelper('json', function (obj) {
    return JSON.stringifyAligned(obj);
});

// list items using Markdown syntax
Handlebars.registerHelper('list', function(list) {
  var out = "";

  for (var i in list) {
    out = out + "\n  - " + list[i];
  }

  return out;
});

var cv = exports.data = function () {
    // could use `require` but it caches permanently
    return JSON.parse(fs.readFileSync(__dirname + '/cv.json')); 
};

exports.preprocess = function (src, data) {
    var context = data || cv();

    var template = Handlebars.compile(src);
    return template(context);
};