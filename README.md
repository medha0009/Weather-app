Weather App  

 Project Description  
This is a simple **web-based Weather Application** built with **HTML, CSS, and JavaScript**. It allows users to enter a city name and retrieve the **current weather conditions** using the **OpenWeatherMap API**. The app displays temperature (in Celsius), weather description, and an icon representing the current condition.  



   Features  
-  Enter any city to check current weather  
-  Displays **temperature in Celsius**  
-  Shows **weather description** (Sunny, Cloudy, Rainy, etc.)  
-  Displays a **weather icon**  
-  Error handling for invalid locations or failed requests  
-  **Responsive design** for desktop, tablet, and mobile  



  Tech Stack  
- **HTML** – Structure of the app  
- **CSS** – Styling & responsiveness  
- **JavaScript** – Logic, API calls, DOM updates, error handling  
- **OpenWeatherMap API** – Weather data provider  



 
How to Run the Project  

1.	Open index.html in any browser.
2.	Replace the API key in script.js with your own OpenWeatherMap key:
3.	const apiKey = "YOUR_API_KEY"; // Get from https://openweathermap.org/
4.	Enter a city name, click Submit, and view the weather details.

Getting an API Key
1.	Go to OpenWeatherMap
2.	Sign up for a free account
3.	Navigate to API Keys in your profile
4.	Copy your key and paste it in script.js

Workflow Example
1.	User enters a city name (e.g., "London")
2.	Clicks Submit
3.	JavaScript sends a request to OpenWeatherMap API
4.	API responds with weather data (temperature, description, icon)
5.	Data is displayed in the app
6.	If the city is invalid, an error message is shown

