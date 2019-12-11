const compile = require("./compile");
module.exports = function() {
  return async function(req, res, next) {
    const str = req.params.id || "No Title";
    const title = str.charAt(0).toUpperCase() + str.slice(1);
    res.write(
      compile.loadView(`./views/header.handlebars`, {
        title: title.replace("-", " ") || "No title"
      })
    );
    next();
  };
};
