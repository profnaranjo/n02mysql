// include mysql module
var mysql = require('mysql');

// create a connection variable with the required details
// var con = mysql.createConnection({
//   host: "localhost", // ip address of server running mysql
//   user: "root", // user name to your mysql database
//   password: "root", // corresponding password
//   database: "mydbtest", // use the specified database
//   port: "8889"
// });

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydbtest",
  port: "8889"
});

// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  var records = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query("INSERT INTO customers (name, address) VALUES ?", [records], function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
  });
});
