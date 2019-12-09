# How to write a Guide

## Step 1: Write a markdown file

```
# /markdown/guide/link1.md
# This is link1
```

## Step 2: Write a routes  
```
//routes/guide/index.js
router.get("/link1", layout.header(), layout.body("guide/link1"), layout.footer);
```

## Step 3: Put link1 in MENU 

```
// views/header.handlebars
 <li>
    <a href="/guide/link1">Link1</a>
</li>
```
That's it.