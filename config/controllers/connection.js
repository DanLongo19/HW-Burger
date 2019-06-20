var mysql = require('mysql');
var connection;

 
        connection = mysql.createConnection({
            host: 'us-cdbr-iron-east-02.cleardb.net',
            user: 'bea42a05407b85',
            password: 'cf3fc9b6',
            database: 'heroku_df0a57905e89e58',
        })
        connection.connect(function(err) {
            if (err) {
              console.error("error connecting: " + err.stack);
              return;
            }
            console.log("connected as id " + connection.threadId);
          });
          
            module.exports = connection;
            
            