const compile = require("./compile");
const convert = require("./convert");
module.exports = function(path1) {
  return async function(req, res, next) {
    await convert(path1);
    res.write(compile.loadView(`./views/${path1}.handlebars`), {});
    next();
  };
};
