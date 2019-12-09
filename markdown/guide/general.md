# Genaral guide
## When you should use this.
This is a Good way to create landing page or document for a project.
Best to fit site that have under 50 pages.  
If you want a site with a thousand pages you should have a database instead.
- Best Practice a create all the routes in the MENU first. Then fillful the markdown later.  

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
