const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
    title: "Index Page",
  });
});

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})


// SHOW
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
    });
  } else {
    res.render("404");
  }
});

// CREATE
breads.post('/', (req, res) => {
  const defaultImage = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
  if (req.body.image) {
    const validUrlPattern = /^https?:\/\//i;
    if (validUrlPattern.test(req.body.image)) {
      req.body.image = req.body.image.trim();
    } else {
      req.body.image = defaultImage;
    }
  } else {
    req.body.image = defaultImage;
  }
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.push(req.body);
  res.redirect('/breads');
});




// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

module.exports = breads;
