var express = require("express");
const layout = require("../../lib/layout");
var router = express.Router();

router.get("/", layout.header(), layout.body("guide/general"), layout.footer);
router.get("/link2", layout.header(), layout.body("guide/link2"), layout.footer);
router.get("/link1", layout.header(), layout.body("guide/link1"), layout.footer);

module.exports = router;
