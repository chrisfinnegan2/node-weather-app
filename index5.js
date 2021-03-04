// Openweathermaps api connection & SQL Table Insertion
// Christopher Finnegan 2021

let apiKey = 'cfce403575d68db6251dc4c7c3f816e2'

let city = 'New York'
let city2 = 'Los Angeles'
let city3 = 'Dallas'

var mysql = require('mysql')
var con = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password`,
  database: `sys`
});

// Designate API request URL before making first request
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

const request = require('request');

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body);

let message = `City: ${weather.name}\nTemperature: ${weather.main.temp}`;
console.log(message);   

global.temp = `${weather.main.temp}`;
console.log(temp);
  }
});
console.log(temp);
/*
// Insert first API Request data response into SQL table
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO weatherdata (Temperature, City) VALUES ('+temp+','+city+')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});



// Alters URL to second city before beginning the second API Request
url = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `City: ${weather.name}\nTemperature: ${weather.main.temp}`;
console.log(message);

  }
});

// Insert second API Request data response into SQL table
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `INSERT INTO weatherdata (Temperature, City) VALUES (${weather.main.temp}, ${weather.name})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

// Alters URL to third city before beginning the third API Request
url = `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `City: ${weather.name}\nTemperature: ${weather.main.temp}`;
console.log(message);

  }
});

// Insert third (last) API Request data response into SQL table
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `INSERT INTO weatherdata (Temperature, City) VALUES (${weather.main.temp}, ${weather.name})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

*/
