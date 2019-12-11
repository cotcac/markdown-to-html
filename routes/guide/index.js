var express = require("express");
const layout = require("../../lib/layout");
var router = express.Router();

router.get(
  "/:id",
  layout.header(),
  layout.menu,
  layout.body("guide"),
  layout.footer
);

module.exports = router;
