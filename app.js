function currentTime(timestamp) {
  let date = new Date(timestamp);
  let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let week = weeks[date.getDay()];
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds;
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  return `${week} ${hour} : ${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#time").innerHTML = currentTime(
    response.data.dt * 1000
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let iconElement = document.querySelector("#icon");
  // iconElement.classList.remove("fas");
  // iconElement.classList.add(`https://openweathermap.org/img/wn/10d@2x.png`);
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function search(city) {
  let apiKey = "49d8a1330406cb9ac92bd472b6ff3770";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(displayTemperature);
}

search("london");

function searchForm(event) {
  event.preventDefault();
  let elementCity = document.querySelector("#city-input");
  search(elementCity.value);

  //   elementCity.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchForm);
