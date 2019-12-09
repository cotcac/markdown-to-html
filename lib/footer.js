const compile = require("./compile");
module.exports = function(req, res, next) {
  res.write(compile.loadView(`./views/footer.handlebars`), {});
  res.end();
};
