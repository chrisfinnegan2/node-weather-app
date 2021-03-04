let apiKey = 'cfce403575d68db6251dc4c7c3f816e2'

let city = 'New York'
let city2 = 'Los Angeles'
let city3 = 'Dallas'


let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

const request = require('request');

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `City: ${weather.name} \n Temperature: ${weather.main.temp}`;
console.log(message);

  }
});

url = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `City: ${weather.name} \n Temperature: ${weather.main.temp}`;
console.log(message);

  }
});

url = `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `City: ${weather.name} \n Temperature: ${weather.main.temp}`;
console.log(message);

let cityName = `${weather.name}`;
let temp = `${weather.main.temp}`;

//console.log(cityName);
  }
});

var mysql = require('mysql')
var con = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password`,
  database: `sys`
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `INSERT INTO weatherapp (City, Temperature) VALUES ('cityName', 'temp')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
