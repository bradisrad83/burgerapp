var express = require("express");
var router = express.Router();
var burger = require("../models/index.js");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

router.get("/burgers", function(request, response) {
  response.render("index", {
    burgers: data
  });
});

router.post("/burgers/create", function(request, response) {
  response.redirect("/burgers");
});

router.put("/burgers/update/devour/:id", function(request, response) {
  response.redirect("/burgers");
});

router.delete("/burgers/delete/:id", function(request, response) {
  response.redirect("/burgers");
});

router.use(function(request, response) {
  response.redirect("/burgers");
});

module.exports = router;
