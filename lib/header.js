const compile = require("./compile");
module.exports = function(title = "No title") {
  return async function(req, res, next) {
    res.write(compile.loadView(`./views/header.handlebars`), {
      title
    });
    next();
  };
};
