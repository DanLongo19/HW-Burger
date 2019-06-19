var connection = require("../controllers/connection.js");

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  update: function(tableInput, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += "SET";
    queryString += devoured=true;
    queryString += condition;
    console.log(queryString);
    connection.query(queryString , function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  add: function(tableInput, value, cb) {
    var queryString = "INSERT INTO" + table;
    queryString += " (";
    queryString += cols.tableInput();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += tableInput(value.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;


