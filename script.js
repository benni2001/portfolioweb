const weatherApi = '13b4120491faf7eb474b453541e45c4a';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

async function weatherData(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${weatherApi}`);
  const data = await response.json();

  if(data.cod ===200) {
    document.getElementById("temperature").innerHTML = data.main.temp + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind-speed").innerHTML = data.wind.speed + "km/h";
  } else {
    alert("City not found");
  }
  
}

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  weatherData(city);
}));