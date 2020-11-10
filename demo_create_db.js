// This file creates a database in the MySQL Server
// Database name: mydbtest

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "8889"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydbtest", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
