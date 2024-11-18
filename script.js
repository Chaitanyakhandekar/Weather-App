const apiKey = "0266b228f677190c5ec358617d232235"; //! API KEY
let apiCall = "https://api.openweathermap.org/data/2.5/weather?q="; //! API Call
let temp = "{city name}&appid={API key}";

async function getWheatherInfo(cityName) {   //! Asyncronus function for getting weather Information from API
  let response = await fetch(apiCall + cityName + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp - 273.15) + "°C";
  document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".percentage").innerHTML =
    data.main.humidity + "%";

  let img = document.querySelector(".wheather-img").firstElementChild;

  if (data.weather[0].main == "Haze") {
    img.src = "https://cdn-icons-png.flaticon.com/512/1779/1779862.png";
  } else if (data.weather[0].main == "Thunderstorm") {
    img.src = "https://openweathermap.org/img/wn/11d@2x.png";
  } else if (data.weather[0].main == "Drizzle") {
    img.src = "icons/drizzel";
  } else if (data.weather[0].main == "Rain") {
    img.src = "https://openweathermap.org/img/wn/10d@2x.png";
  } else if (data.weather[0].main == "Snow") {
    img.src = "https://openweathermap.org/img/wn/13d@2x.png";
  } else if (data.weather[0].main == "Clear") {
    img.src = "https://openweathermap.org/img/wn/01d@2x.png";
  } else if (data.weather[0].main == "Clouds") {
    img.src = "https://openweathermap.org/img/wn/04d@2x.png";
  } else {
    img.src = "https://openweathermap.org/img/wn/01d@2x.png";
  }
}

document.querySelector(".search-icon").addEventListener("click", () => {   //! EventListner for making Request to API after Clicking on Search icon
  const inputBox = document.querySelector(".search-bar");
  const closeIcon = document.querySelector(".bi-x");

  closeIcon.style.display='block'

  closeIcon.addEventListener("click", function () {
    inputBox.value = "";
    closeIcon.classList.remove("show");
    closeIcon.style.display='none'
    inputBox.focus();
  });

  let cityName = String(document.querySelector(".search-bar").value);
  cityName.toLowerCase();
  getWheatherInfo(cityName);
});

getWheatherInfo('baramati')
