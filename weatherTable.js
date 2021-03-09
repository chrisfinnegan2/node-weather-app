// Openweathermaps api connection & SQL Table Insertion
// Christopher Finnegan 2021

let apiKey = 'cfce403575d68db6251dc4c7c3f816e2'

let city = 'New York'
//let city2 = 'Los Angeles'
//let city3 = 'Dallas'

var mysql = require('mysql')
var con = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password`,
  database: `sys`
});

// Designated API request URL before making first request
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

const request = require('request');

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

/* let message = `City: ${weather.name}\nTemperature: ${weather.main.temp}`;
console.log(message);

Statement to print weather data / Check that variables function properly
*/

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    
// Storage for 2 SQL Queries
  var sqltable = `CREATE TABLE IF NOT EXISTS weatherdata
  (Temperature float NOT NULL,
  City varchar(255) NOT NULL)`;
  var sql = `INSERT INTO weatherdata (Temperature, City) VALUES (${weather.main.temp}, "${weather.name}")`;
    
// Creates a table if one is not already present
  con.query(sqltable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
      
// Inserts parsed weather data into table 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
      
con.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Closed the database connection.');
});
      });
  });
});


  }
});
