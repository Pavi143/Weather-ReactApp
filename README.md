<h1>Weather App</h1>
<img src="https://raw.githubusercontent.com/pavi143/Weather-ReactApp/main/screenshots/output.png " alt="">

This is a simple weather app built using React that allows users to search for weather information for a specific city. The app provides real-time weather data, including temperature, humidity, and wind speed, along with a weather icon to represent the current conditions.

## Features

- Users can search for the weather information of a city by typing the city name in the search bar.
- The app fetches data from the OpenWeatherMap API to provide accurate weather details.
- Weather conditions are displayed with corresponding icons, such as sunny, cloudy, rainy, drizzle, snow, etc.
- Temperature is displayed in degrees Celsius (°C), humidity as a percentage (%), and wind speed in kilometers per hour (km/h).
- The location (city name) is also shown to confirm the search results.

## Prerequisites

Before using this app, you will need to obtain an API key from OpenWeatherMap. You can replace the `api` variable in the code with your own API key to make API requests.

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the project directory.

```bash
cd your-repo-name
```

3. Install the required dependencies using npm.

```bash
npm install
```

4. Start the development server.

```bash
npm start
```

5. Open your web browser and access the app at `http://localhost:3000`.

## Usage

1. Enter the name of a city in the search bar.
2. Click the search icon to fetch the weather data for the entered city.
3. The app will display the current weather conditions, temperature, humidity, wind speed, and the location (city name) based on the API response.
4. The weather icon will change to represent the current weather conditions.

## Weather Icons

- Sunny: ![Sunny Icon](src/assets/clear.png)
- Cloudy: ![Cloudy Icon](src/assets/cloud.png)
- Drizzle: ![Drizzle Icon](src/assets/drizzle.png)
- Rainy: ![Rainy Icon](src/assets/rain.png)
- Snowy: ![Snowy Icon](src/assets/snow.png)

## Acknowledgments

- This app uses the OpenWeatherMap API to fetch weather data.
- Weather icons are sourced from various free icon libraries and are credited as per their source.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use and modify the code as needed for your own projects.

---

Happy coding! If you have any questions or feedback, please don't hesitate to get in touch.


