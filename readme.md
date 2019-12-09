# How to write a Guide

## Step 1: Write a markdown file

```
# /markdown/link1.md
```
## Step 2: Write a middleware

```
// routes/guide/link1.js
# This is link1
```

## Step 3: Write a routes  
```
//routes/guide/index.js
router.get("/link1", layout.header(), require("./link1"), layout.footer);
```

## Put link1 in MENU 

```
// views/header.handlebars
 <li>
    <a href="/guide/link1">Link1</a>
</li>
```
That's it.