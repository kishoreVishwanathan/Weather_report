function getWeatherReport() {
  let city = document.getElementById("num");
  let button = document.getElementById("btn");
  let name = document.getElementById("name");
  let desc = document.getElementById("desc");
  let temp = document.getElementById("temp");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=96db6273264b400c9b685522c0b7e5a3`
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data.name;
      var tempValue = data.main.temp;
      var descValue = data.weather[0].description;
      name.innerHTML = nameValue.toUpperCase();
      temp.innerHTML = tempValue + " C";
      desc.innerHTML = descValue.toUpperCase();
      let Id = data.weather[0].id;
      if (Id >= -50 && Id <= 0) {
        document.getElementById("video").src = "rain.mp4";
      } else if (Id >= 200 && Id <= 232) {
        document.getElementById("video").src = "video/thunderstorm.mp4";
      } else if (Id >= 300 && Id <= 321) {
        document.getElementById("video").src = "video/drizzle.mp4";
      } else if (Id >= 500 && Id <= 531) {
        document.getElementById("video").src = "video/rain.mp4";
      } else if (Id >= 600 && Id <= 622) {
        document.getElementById("video").src = "video/snow.mp4";
      } else if (Id >= 700 && Id <= 781) {
        document.getElementById("video").src = "video/cloud.mp4";
      } else if ((Id = 800)) {
        document.getElementById("video").src = "video/clear.mp4";
      } else if (Id >= 801 && Id <= 804) {
        document.getElementById("video").src = "video/clouds.mp4";
      }
    })
    .catch((err) => {
      name.innerHTML = "Please enter valid location";
    });
}
