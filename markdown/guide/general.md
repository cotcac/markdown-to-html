# Genaral guide

## Relative Link

[Link 1](/guide/link1)  
[Link 2](/guide/link2)

## Code

```
module.exports = function(app) {
  // visitor
  app.use("/", require("./routes/index"));
  // Guide
  app.use("/guide", require("./routes/guide"));
};


```

## Image

![Alt][1]

[1]: /files/test.png "Title"
