var connection = require("../controllers/connection.js");

var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ', "+tableInput+", function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  update: function(tableInput, condition, cb) {
    connection.query('UPDATE "+tableInput+", SET devoured=true WHERE id='+condition+';' , function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  add: function(tableInput, value, cb) {
    connection.query('INSERT INTO "+tableInput+" (burger_name) VALUES ("+value+");', function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;