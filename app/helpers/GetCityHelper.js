var axios = require('axios');

var APIKEY = '63f081bac3e9f7ca01892117e4e69f39';
var URL_BASE = 'http://api.openweathermap.org/data/2.5/';
var URL_WEATHER = URL_BASE + 'weather';
var URL_FORECAST = URL_BASE + 'forecast/daily';

// Weather:  http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
// Forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

var getCurrentWeather = function(city) {

	var url = URL_WEATHER + '?type=accurate&units=metric&APPID=' + APIKEY + '&q=' + city;

	return axios.get(url)
	.then(function (result) {
		console.log(result.data);
	});

}

var getForcast = function(city) {

	var url = URL_FORECAST + '?type=accurate&units=metric&cnt=5&APPID=' + APIKEY + '&q=' + city;

	return axios.get(url)
	.then(function (result) {
		console.log(result.data);
	});

}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForcast: getForcast
}