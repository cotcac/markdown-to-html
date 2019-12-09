const convert = require("../../lib/convert");
const compile = require("../../lib/compile");
const body = async (req, res, next) => {
  const path1 = "guide/link2";
  await convert(path1);
  res.write(compile.loadView(`./views/${path1}.handlebars`), {});
  next();
};
module.exports = body;
