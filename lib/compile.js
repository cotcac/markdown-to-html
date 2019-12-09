var fs = require("fs");
var Handlebars = require("handlebars");

// name of the file, locals = object {title....}
var loadView = function(path, locals) {
  //replace(/(\r\n\t|\n|\r\t)/gm,"") remove break line.
  //replace( /\s\s+/g, ' ' ); remove multiple space.
  var template = fs.readFileSync(path, "utf8").trim();
  // var template = fs.readFileSync(path,"utf8")
  var compiled = Handlebars.compile(template);
  return compiled(locals);
};

// inline compile.
var inline = function(template, data) {
  var compiled = Handlebars.compile(template);
  return compiled(data);
};
exports.loadView = loadView;
exports.inline = inline;
