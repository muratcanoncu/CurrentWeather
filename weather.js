"use strict";

// fetch("http://example.com/movies.json")
//  .then((response) => response.json())
//   .then((data) => console.log(data));

let myKey = "e6297ad1e1f3b7a35b749ff2967e9270";

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", function (event) {
  if (event.code == "Enter") {
    // keyCode = 13 = enter
    getResults(searchBox.value);
  }
});
function getResults(city) {
  // parameter = city name
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`
  )
    // first then () --> access to JSON file(parse it)
    .then((weather) => {
      return weather.json();
    })
    // second then() --> use the data from json file
    //inside the second then we reach all the data (Array or Object),our argument is name of our array or object
    .then(function displayResults(arg1) {
      let city = document.querySelector(".location .city");
      city.innerText = `${arg1.name}, ${arg1.sys.country}`;
      let temp = document.querySelector(".current .temp");
      temp.innerHTML = `${(arg1.main.temp - 273.15).toFixed(0)}<span>°c</span>`;
      let weather = document.querySelector(".current .weather");
      weather.innerHTML = arg1.weather[0].main;
      let highLow = document.querySelector(".current .hi-low");
      highLow.innerHTML = `${(arg1.main.temp_min - 273.15).toFixed(0)}°c / ${(
        arg1.main.temp_max - 273.15
      ).toFixed(0)}°c`;
      let currentDate = new Date();
      let today = document.querySelector(".location .date");
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      today.innerHTML = `${
        days[currentDate.getDay()]
      } ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      } ${currentDate.getFullYear()}`;
    });
}

// let arg1 = {
//   coord: {
//     lon: 5.5,
//     lat: 50,
//   },
//   weather: [
//     {
//       id: 804,
//       main: "Clouds",
//       description: "overcast clouds",
//       icon: "04d",
//     },
//   ],
//   base: "stations",
//   main: {
//     temp: 280.38,
//     feels_like: 278.03,
//     temp_min: 279.82,
//     temp_max: 280.93,
//     pressure: 1021,
//     humidity: 96,
//   },
//   visibility: 10000,
//   wind: {
//     speed: 2.24,
//     deg: 199,
//     gust: 4.92,
//   },
//   clouds: {
//     all: 86,
//   },
//   dt: 1608198632,
//   sys: {
//     type: 3,
//     id: 60369,
//     country: "BE",
//     sunrise: 1608190307,
//     sunset: 1608219410,
//   },
//   timezone: 3600,
//   id: 2791993,
//   name: "Luxembourg Province",
//   cod: 200,
// };
