const mysql = require('mysql');

// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'ecommerce_db'
  });

  module.exports = connection;