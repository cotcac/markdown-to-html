var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", async function(req, res, next) {
  res.redirect("/guide/link1");
});

module.exports = router;
