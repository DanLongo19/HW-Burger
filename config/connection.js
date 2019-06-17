var mysql = require('mysql');
var connection;

if (process.env.mysql://t21owgo8sl379esi:ln5iprq3p47q8paz@u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/im3dfxyl5ovvkz5l) {
    connection = mysql.createConnection(process.env.mysql://t21owgo8sl379esi:ln5iprq3p47q8paz@u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/im3dfxyl5ovvkz5l);
    else {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Brewers2019!',
            database: 'burgers_db';
        })
    }
}