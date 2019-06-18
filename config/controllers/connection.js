var mysql = require('mysql');
var connection;

if ("u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com") {
    connection = mysql.createConnection("mysql://t21owgo8sl379esi:ln5iprq3p47q8paz@u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/im3dfxyl5ovvkz5l");
    } else {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Brewers2019!',
            database: 'burgers_db',
        })
        connection.connect(function(err) {
            if (err) {
              console.error("error connecting: " + err.stack);
              return;
            }
            console.log("connected as id " + connection.threadId);
          });
          
            module.exports = connection;
}
