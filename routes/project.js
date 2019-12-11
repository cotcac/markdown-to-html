var express = require("express");
const layout = require("../lib/layout");
var router = express.Router();

router.get(
  "/:id",
  layout.header(),
  layout.nav,
  layout.menu("project"),
  layout.body("project"),
  layout.footer
);

module.exports = router;
