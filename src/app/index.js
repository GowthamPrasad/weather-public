// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//   params: {city: 'Seattle'},
//   headers: {
//     'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
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
//     appid: ['da0f9c8d90bde7e619c3ec47766a42f4', 'da0f9c8d90bde7e619c3ec47766a42f4'],
//     units: 'standard'
//   },
//   headers: {
//     'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
//     'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
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
//     'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
//     'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
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
    'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
  let obj = JSON.parse(body);
  console.log(obj.forecast[0].minRelHumidity);
});



