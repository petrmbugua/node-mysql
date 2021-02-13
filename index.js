const express = require('express');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydb',
});

// Connect A DB
con.connect(function (err) {
  if (err) throw err;
  console.log('Connected');

  // CREATE A DB

  //   con.query('CREATE DATABASE mydb', function(err, result){
  //     if (err) throw err;
  //     console.log('DB Created');
  //   })

  // CREATE TABLE

  // Customer table

  // const sql =
  //   'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), address VARCHAR(255)  )';

  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log('table created');
  // });

  // Related "users" table and "products"  tables

  // Products Table
  // const sql =
  //   'CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255)  )';

  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log('table created');
  // });

  // User Table
  //   const sql =
  //     'CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL,name VARCHAR(255), favorite_product INT, PRIMARY KEY (id), FOREIGN KEY (id) REFERENCES products(id)   )';

  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log('table created');
  //   });

  // ALTER TABLE
  // const sql = "ALTER TABLE customers ADD COLUMN age INT(20)";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table altered");
  // });

  // INSERT INTO TABLE
  //   const sql =
  //     "INSERT INTO customers (name, address, age) VALUES ('Company Inc', 'Highway 37', '3')";

  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log('1 record inserted');
  //   });

  // INSERT MULTIPLE RECORDS

  // Products Table

  //   const sql = 'INSERT INTO products (name) VALUES ?';

  //   const values = [
  //     ['Chocolate Heaven'],
  //     ['Tasty Lemons'],
  //   ];

  //   con.query(sql, [values], function (err, result) {
  //     if (err) throw err;
  //     console.log('Number of records inserted: ' + result.affectedRows);
  //   });

  // Users Table

  //   const sql = 'INSERT INTO users (name,  favorite_product ) VALUES ?';

  //   const values = [
  //     ['John', '2'],
  //     ['Peter', '1'],
  //   ];

  //   con.query(sql, [values], function (err, result) {
  //     if (err) throw err;
  //     console.log('Number of records inserted: ' + result.affectedRows);
  //   });

  // Customers Table

  // const sql = 'INSERT INTO customers (name, address, age) VALUES ?';

  // const values = [
  //   ['John', 'Highway 71', '4'],
  //   ['Peter', 'Lowstreet 4', '14'],
  //   ['Amy', 'Apple st 652', '2'],
  //   ['Hannah', 'Mountain 21', '10'],
  //   ['Michael', 'Valley 345', '23'],
  //   ['Sandy', 'Ocean blvd 2', '34'],
  //   ['Betty', 'Green Grass 1', '12'],
  //   ['Richard', 'Sky st 331', '32'],
  //   ['Susan', 'One way 98', '10'],
  //   ['Vicky', 'Yellow Garden 2', '9'],
  //   ['Ben', 'Park Lane 38', '4'],
  //   ['William', 'Central st 954', '6'],
  //   ['Chuck', 'Main Road 989', '7'],
  //   ['Viola', 'Sideway 1633', '8'],
  // ];

  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log('Number of records inserted: ' + result.affectedRows);
  // });

  // GET INSERTED ID

  //   const sql =
  //     "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log('1 record inserted, ID: ' + result.insertId);
  //   });

  // SELECTING FROM A TABLE

  // con.query('SELECT * FROM customers', function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // SELECTING COLUMNS

  //   con.query(
  //     'SELECT name, address FROM customers',
  //     function (err, result, fields) {
  //       if (err) throw err;
  //     //   console.log(result);
  //       // REsult Object
  //     //   console.log(result[2].address);
  //     // console.log(fields);
  //     console.log(fields[1].name);
  //     }
  //   );

  // SELECT WITH A FILTER

  //   con.query(
  //     "SELECT * FROM customers WHERE address = 'Park Lane 38'",
  //     function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );

  // WILDCARD CHARACTERS

  //   con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  //ESCAPING QUERY VALUES

  //   const adr = 'Mountain 21';
  //   const sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  //   const adr = 'Mountain 21';
  //   const sql = 'SELECT * FROM customers WHERE address = ?';
  //   con.query(sql, [adr], function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  //   const name = 'Amy';
  //   const adr = 'Mountain 21';
  //   const sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  //   con.query(sql, [name, adr], function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // SORT THE RESULT

  // con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // ORDER BY DESC

  //   con.query(
  //     'SELECT * FROM customers ORDER BY name DESC',
  //     function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );

  // DELETE RECORD

  //   const sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log('Number of records deleted: ' + result.affectedRows);
  //   });

  // DELETE TABLE

  //   const sql = 'DROP TABLE customers';
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log('Table deleted');
  //   });

  // DELETE ONLY IF IT EXISTS

  //   const sql = 'DROP TABLE IF EXISTS customers';
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // UPDATE TABLE

  //   const sql =
  //     "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result.affectedRows + ' record(s) updated');
  //   });

  // LIMIT THE RESULT

  //   const sql = 'SELECT * FROM customers LIMIT 5';
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // Start From Another Position

  //   const sql = 'SELECT * FROM customers LIMIT 5 OFFSET 2';
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  //   const sql = 'SELECT * FROM customers LIMIT 2, 5';
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // Join Two or More Tables

  // const sql =
  //   'SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id';
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  
});

app.listen(5000, () => {
  console.log('Server started at port 5000...');
});
