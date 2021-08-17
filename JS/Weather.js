const API_KEY = "e93269d0d3a19528cadd7a15615e9760";
function onSucess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    // last는 되는데 second는 안되네 
    city.innerText =data.name;
    weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`

  });
}
function onError() {
  alert("Can't find your location");
}
navigator.geolocation.getCurrentPosition(onSucess, onError);
