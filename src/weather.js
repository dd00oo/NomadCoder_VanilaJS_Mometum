
const API_KEY = "d28329e708ea32b3dd0d0c2a504452ef";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&limit=1&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city");
      const weather = document.querySelector("#weatherStr");
      const temp = document.querySelector("#temp");
      const weatherIcon = document.querySelector("#weatherIcon");
      const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main;
      temp.innerHTML = Math.ceil(Number(data.main.temp)) + "℃";
      weatherIcon.innerHTML = `<img src=${iconurl} width="50px" height="50px">`;
    });
}

function onGeoError() {
  alert("Can't find You. No weather for you.");
}

setTimeout(
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError),
  3000
);
