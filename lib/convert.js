var fs = require("fs");
var marked = require("marked");
/**
 * If environment is production just return.
 * If the environment is other convert markdown file use "marked module" from markdown directory
 * to handlebar file in views.
 */
module.exports = async path1 => {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  try {
    var readMe = fs.readFileSync(`./markdown/${path1}.md`, "utf-8");
    var markdownReadMe = marked(readMe);
    await fs.writeFileSync(`./views/${path1}.handlebars`, markdownReadMe);
    return true;
  } catch (error) {
    throw new Error(error.stack);
  }
};
