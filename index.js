
let apiKey = 'cfce403575d68db6251dc4c7c3f816e2'

let city = 'New York'
let city2 = 'Los Angeles'
let city3 = 'Dallas'

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

const request = require('request');

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
console.log(message);

  }
});

url = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
console.log(message);

  }
});

url = `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
let weather = JSON.parse(body)

let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
console.log(message);

  }
});
