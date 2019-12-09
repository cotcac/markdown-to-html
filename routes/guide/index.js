var express = require("express");
const layout = require("../../lib/layout");
var router = express.Router();

router.get("/", layout.header(), require("./general"), layout.footer);
router.get("/link2", layout.header(), require("./link2"), layout.footer);
router.get("/link1", layout.header(), require("./link1"), layout.footer);

module.exports = router;
