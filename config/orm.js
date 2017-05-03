var connection = require("./connection.js");
var methodOverride = require("method-override");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, name, values, cb) {
    var queryString = "INSERT INTO " + table + "(" + name + ")" + "VALUES('" + [values] + "')";
    connection.query(queryString, values, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, column, id, cb) {
    var queryString = "UPDATE " + table + " SET " + column + "=1 " + "WHERE id=" + id;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(table, id, cb) {
    var queryString = "DELETE FROM " + table + " WHERE id = " + id;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};


module.exports = orm;
