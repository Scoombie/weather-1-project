let now = new Date();
console.log(now);
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  let currentDate = document.querySelector(".timing");
  currentDate.innerHTML = `${currentDay} , ${currentHours}:${currentMinutes}`;
}
formatDate(now);

function citySearch(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#searchcity");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchCity.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", citySearch);

function changeFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = 66;
}
function changeCelcius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#f-link");
fahrenheitLink.addEventListener("click", changeFahrenheit);

let celciusLink = document.querySelector("#c-link");
celciusLink.addEventListener("click", changeCelcius);
