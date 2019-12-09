var express = require("express");
var router = express.Router();
const path = require("path");
const convert = require("../lib/convert");
const compile = require("../lib/compile");
const layout = require("../lib/layout");
/* GET home page. */
router.get("/", async function(req, res, next) {
  res.render("index", {});
});
router.get("/test", async function(req, res, next) {
  const path1 = "README";
  await convert(path1);
  res.sendFile(path.join(__dirname, "../views/README.html"));
});

const body = async (req, res, next) => {
  const path1 = "guide/general";
  await convert(path1);
  res.write(compile.loadView(`./views/${path1}.handlebars`), {});
  next();
};
// router.get("/guide", layout.header("Guide"), body, layout.footer);

module.exports = router;
