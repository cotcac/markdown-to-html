module.exports = function(app) {
  // visitor
  app.use("/", require("./routes/index"));
  // Guide
  app.use("/guide", require("./routes/guide"));
  // Project 2
  app.use("/project", require("./routes/project"));
};
