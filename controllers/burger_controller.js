var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
//router.get("/", function(request, response) {
//  response.redirect("/burgers");
//});

router.get("/burgers", function(request, response) {
  burger.selectAll(function(data) {
    response.render("index", {
      burgers: data
    });
  });
});

router.post("/burgers/create", function(request, response) {
  burger.insertOne("burger_name", request.body.name, function() {
    response.redirect("/burgers");
  });
});

router.put("/burgers/update/devour/:id", function(request, response) {
  burger.updateOne("burgers", "devoured", request.params.id, function() {
    response.redirect("/burgers");
  });
});

router.delete("/burgers/delete/:id", function(request, response) {
  burger.deleteOne("burgers", request.params.id, function() {
    response.redirect("/burgers");
  });
});

router.use(function(request, response) {
  response.redirect("/burgers");
});

module.exports = router;
