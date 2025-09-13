import { fetchWeatherApi } from "openmeteo";
import { format } from "date-fns";
const params = {
  latitude: 6.4541,
  longitude: 3.3947,
  daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
  hourly: [
    "temperature_2m",
    "relative_humidity_2m",
    "precipitation_probability",
    "weather_code",
    "wind_speed_10m",
  ],
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "precipitation",
    "weather_code",
    "wind_speed_10m",
  ],
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
// const latitude = response.latitude();
// const longitude = response.longitude();
// const elevation = response.elevation();

const utcOffsetSeconds = response.utcOffsetSeconds();

const current = response.current();
const hourly = response.hourly();
const daily = response.daily();

// console.log(daily);

// Note: The order of weather variables in the URL query and the indices below need to match
const weatherData = {
  current: {
    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    temperature_2m: current.variables(0).value(),
    relative_humidity_2m: current.variables(1).value(),
    precipitation: current.variables(2).value(),
    weather_code: current.variables(3).value(),
    wind_speed_10m: current.variables(4).value(),
    is_day: current.variables(5).value(),
  },
  hourly: {
    time: [
      ...Array(
        (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
      ),
    ].map(
      (_, i) =>
        new Date(
          (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
            1000
        )
    ),
    temperature_2m: hourly.variables(0).valuesArray(),
    relative_humidity_2m: hourly.variables(1).valuesArray(),
    precipitation_probability: hourly.variables(2).valuesArray(),
    weather_code: hourly.variables(3).valuesArray(),
    wind_speed_10m: hourly.variables(4).valuesArray(),
  },
  daily: {
    time: [
      ...Array(
        (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
      ),
    ].map((_, i) =>
      format(
        new Date(
          (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
            1000
        ),
        "EE"
      )
    ),
    weather_code: daily.variables(0).valuesArray(),
    temperature_2m_max: daily.variables(1).valuesArray(),
    temperature_2m_min: daily.variables(2).valuesArray(),
  },
};
// 'weatherData' now contains a simple structure with arrays with datetime and weather data
// console.log(
//   `\nCurrent time: ${weatherData.current.time}`,
//   `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
//   `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
//   `\nCurrent precipitation: ${weatherData.current.precipitation}`,
//   `\nCurrent rain: ${weatherData.current.rain}`,
//   `\nCurrent showers: ${weatherData.current.showers}`,
//   `\nCurrent weather_code: ${weatherData.current.weather_code}`
// );
// console.log("\nHourly data", weatherData.hourly);
// console.log("\nDaily data", weatherData.daily);

export { weatherData };
