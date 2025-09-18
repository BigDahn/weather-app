import { fetchWeatherApi } from "openmeteo";

export async function getWeatherInfo(location) {
  // console.log(location);
  const { latitude, longitude } = location;

  const params = {
    latitude: latitude,
    longitude: longitude,
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation_probability",
      "weather_code",
      "wind_speed_10m",
      "is_day",
    ],
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation",
      "weather_code",
      "wind_speed_10m",
      "is_day",
      "apparent_temperature",
    ],
    timezone: "auto",
  };
  const url = "https://api.open-meteo.com/v1/forecast";

  try {
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current();
    const hourly = response.hourly();
    const daily = response.daily();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature_2m: current.variables(0).value(),
        relative_humidity_2m: current.variables(1).value(),
        precipitation: current.variables(2).value(),
        weather_code: current.variables(3).value(),
        wind_speed_10m: current.variables(4).value(),
        is_day: current.variables(5).value(),
        apparent_temperature: current.variables(6).value(),
      },
      hourly: {
        time: [
          ...Array(
            (Number(hourly.timeEnd()) - Number(hourly.time())) /
              hourly.interval()
          ),
        ].map(
          (_, i) =>
            new Date(
              (Number(hourly.time()) +
                i * hourly.interval() +
                utcOffsetSeconds) *
                1000
            )
        ),
        temperature_2m: hourly.variables(0).valuesArray(),
        // relative_humidity_2m: hourly.variables(1).valuesArray(),
        // precipitation_probability: hourly.variables(2).valuesArray(),
        weather_code: hourly.variables(3).valuesArray(),
        // wind_speed_10m: hourly.variables(4).valuesArray(),
        is_day: hourly.variables(5).valuesArray(),
      },
      daily: {
        time: [
          ...Array(
            (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
          ),
        ].map(
          (_, i) =>
            new Date(
              (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
                1000
            )
        ),
        weather_code: daily.variables(0).valuesArray(),
        temperature_2m_max: daily.variables(1).valuesArray(),
        temperature_2m_min: daily.variables(2).valuesArray(),
      },
    };
    return weatherData;
  } catch (error) {
    throw new Error(error);
  }
}
