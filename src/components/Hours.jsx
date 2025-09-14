import { format } from "date-fns";

import { weatherData } from "../services/getWeatherInfo";
import { useWeather } from "../contexts/Weather";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { FahrenheitConverter } from "../utils/calculator";

function Hours() {
  const { currentDay } = useWeather();
  const { temp } = useWeather();
  const { hourly } = weatherData;
  const { time, weather_code, temperature_2m } = hourly;
  const currentTempName = temp.filter((s) => s.isChecked)[0].name;
  const hours = time
    .map((day, index) => {
      return {
        time: day,
        weather: weather_code[index],
        temperature: temperature_2m[index],
      };
    })
    .filter(
      (s) =>
        format(s.time, "eee MMM dd yyyy") ===
        format(currentDay, "eee MMM dd yyyy")
    );

  // console.log(WeatherForEachHours);
  return (
    <div className="flex flex-col gap-2">
      {hours.map((day, index) => {
        const { time, weather, temperature } = day;

        console.log(day);
        return (
          <main
            className="flex items-center justify-between  bg-[#302F4A] py-2 px-2 rounded-md ring-1 ring-[#3C3B5E]"
            key={index}
          >
            <div className="flex gap-2 items-center">
              <img src={getWeatherIcon(weather)} className="w-[40px]" />
              <h3 className="font-DM_SANS font-medium text-[16px] text-[#ffffff] leading-normal">
                {format(time, "h aa")}
              </h3>
            </div>
            <h6 className="font-DM_SANS font-regular text-[14px] text-[#ffffff] leading-[120%]">
              {" "}
              {currentTempName === "Celsius (°C)"
                ? Math.round(temperature)
                : Math.round(FahrenheitConverter(temperature))}
              °
            </h6>
          </main>
        );
      })}
    </div>
  );
}

export default Hours;
/** <div className="flex gap-3 items-center">
        <p>23</p>
        <h3>4PM</h3>
      </div>
      <h3>12</h3> */
