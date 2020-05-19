// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "alK100++",
  database: "burgers_db",
  language: "mysql"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    throw(err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;