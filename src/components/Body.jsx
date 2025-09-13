import { format } from "date-fns";
import { weatherData } from "../services/getWeatherInfo";
import SearchBar from "./SearchBar";
import WeatherContainer from "./WeatherContainer";

function Body() {
  const { current } = weatherData;
  const {
    time,
    is_day,
    precipitation,
    relative_humidity_2m,
    temperature_2m,
    weather_code,
    wind_speed_10m,
  } = current;
  const s = format(time, "EEEE,MMM dd,yyyy");
  // console.log(new Array(daily));

  return (
    <div className="flex flex-col gap-4 pb-3">
      <SearchBar />
      <WeatherContainer />
    </div>
  );
}

export default Body;
