const compile = require("./compile");
const convert = require("./convert");
module.exports = function(path1) {
  return async function(req, res, next) {
    const path2 = req.params.id;
    const full_path = `${path1}/${path2}`;
    try {
      await convert(full_path);
      res.write(compile.loadView(`./views/${full_path}.handlebars`, {}));
      next();
    } catch (error) {
      res.write(`<pre>${error.stack}</pre>`);
      next();
    }
  };
};
