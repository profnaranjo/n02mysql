// This file shows how to connect to a MySQL Database

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
});
