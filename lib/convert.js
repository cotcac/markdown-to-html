var fs = require("fs");
var marked = require("marked");
const path = require("path");
module.exports = async path1 => {
  console.log("call me");
  if (process.env.NODE_ENV === "production") {
    console.log("!production just return!!!!");
    return;
  }
  console.log("convert");

  try {
    var readMe = fs.readFileSync(`./markdown/${path1}.md`, "utf-8");
    var markdownReadMe = marked(readMe);
    await fs.writeFileSync(`./views/${path1}.handlebars`, markdownReadMe);
    return true;
  } catch (error) {
    throw new Error(error.stack);
  }
};
