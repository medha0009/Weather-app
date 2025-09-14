const apiKey = "49a22fdd4c50886ecba961434e65f4ec"; 
const getWeatherBtn = document.getElementById("get-weather");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");
const errorMessage = document.getElementById("error-message");

getWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
});

function displayWeather(data) {
  errorMessage.classList.add("hidden");
  weatherInfo.classList.remove("hidden");

  document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `🌡️ ${data.main.temp} °C`;
  document.getElementById("description").textContent = `🌍 ${data.weather[0].description}`;
  document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function showError(message) {
  weatherInfo.classList.add("hidden");
  errorMessage.classList.remove("hidden");
  errorMessage.textContent = message;
}
