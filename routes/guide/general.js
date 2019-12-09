const convert = require("../../lib/convert");
const compile = require("../../lib/compile");
const body = async (req, res, next) => {
  const path1 = "guide/general";
  await convert(path1);
  res.write(compile.loadView(`./views/${path1}.handlebars`), {});
  next();
};
module.exports = [body];
