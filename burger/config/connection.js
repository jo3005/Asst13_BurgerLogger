// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection=mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db",
    language: "mysql"
  });
};

// Set up our connection information


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
