var burger = require("../models/index.js")["Burger"];

module.exports = function(app) {
  app.get("/", function (req, res){
    burger.findAll({}).then(function (dbburgers){
      var burgerReturn = {burgers: dbburgers};
      res.render("index", burgerReturn);
    });
  });
};
