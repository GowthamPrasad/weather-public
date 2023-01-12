// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//   params: {city: 'Seattle'},
//   headers: {
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': ''
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://openweather43.p.rapidapi.com/weather',
//   params: {
//     q: 'Dubai',
//     appid: ['', ''],
//     units: 'standard'
//   },
//   headers: {
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': ''
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://foreca-weather.p.rapidapi.com/location/search/mumbai',
//   qs: {lang: 'en', country: 'in'},
//   headers: {
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': '',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

//   console.log(body);
//   let obj = JSON.parse(body);
//   console.log(obj.locations[0]);
// });
  

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://foreca-weather.p.rapidapi.com/forecast/daily/102643743',
  qs: {alt: '0', tempunit: 'C', windunit: 'MS', periods: '8', dataset: 'full'},
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': '',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
  let obj = JSON.parse(body);
  console.log(obj.forecast[0].minRelHumidity);
});



