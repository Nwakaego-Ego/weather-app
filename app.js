function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = `49d8a1330406cb9ac92bd472b6ff3770`;
console.log(apiKey);
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=Nigeria&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiKey).then(displayTemperature);
