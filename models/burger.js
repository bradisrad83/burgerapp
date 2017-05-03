var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
    });
  },
  insertOne: function(column, name, cb) {
    orm.insertOne("burgers", column, name, function(data) {
      //console.log(data);
      cb(data);
    });
  },
  updateOne: function(table, column, id, cb) {
    orm.updateOne("burgers", column, id, function(data) {
      cb(data);
    });
  },
  deleteOne: function(table, id, cb) {
    orm.deleteOne("burgers", id, function(data) {
      console.log(data);
      cb(data);
    });
  }
}

module.exports = burger;
