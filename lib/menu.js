const compile = require("./compile");
module.exports = function(req, res, next) {
  const current = req.params.id;
  const data = compile.loadView(`./views/menu.handlebars`, {
    current
  });
  res.write(data);
  next();
};
