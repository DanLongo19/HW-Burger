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
    queryString += deveoured=true;
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
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;


