import { format } from "date-fns";

import { useWeather } from "../contexts/Weather";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { FahrenheitConverter } from "../utils/calculator";
import { FilterFunction } from "../utils/FilterFunction";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

function Hours() {
  const { data, isLoading } = useWeatherForecast();

  const loadingState = Array.from({ length: 11 }, (_, k) => k);

  const { currentDay, temp } = useWeather();

  const { hourly = {}, current = {} } = data;
  const { time, weather_code, temperature_2m, is_day } = hourly;
  const currentTempName = FilterFunction(temp);
  const checkDay = currentDay ?? current.time;
  const hours = time
    ?.map((day, index) => {
      return {
        time: day,
        weather: weather_code[index],
        temperature: temperature_2m[index],
        isDay: is_day[index],
      };
    })
    .filter(
      (s) =>
        format(s.time, "eee MMM dd yyyy") ===
        format(checkDay, "eee MMM dd yyyy")
    );

  return (
    <>
      {isLoading || Object.keys(hourly).length < 1 ? (
        <div className="flex flex-col gap-3 pt-2">
          {loadingState.map((s, i) => {
            return (
              <main
                className="flex items-center justify-between  bg-[#302F4A] py-2 px-2 rounded-md ring-1 ring-[#3C3B5E]"
                key={i}
              >
                <div className="flex gap-2.5 items-center  min-w-[90%] py-3"></div>
              </main>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {hours?.map((day, index) => {
            const { time, weather, temperature, isDay } = day;
            return (
              <main
                className="flex items-center justify-between  bg-[#302F4A] py-2 px-2 rounded-md ring-1 ring-[#3C3B5E]"
                key={index}
              >
                <div className="flex gap-2.5 items-center  min-w-[90%]">
                  <img
                    src={getWeatherIcon(weather, isDay)}
                    className={isDay ? "w-[12%]" : "w-[12%]"}
                  />
                  <h3 className="font-DM_SANS font-medium text-[16px] text-[#ffffff] leading-normal">
                    {format(time, "h aa")}
                  </h3>
                </div>
                <h6 className="font-DM_SANS font-regular text-[16px] text-[#ffffff] leading-[120%] min-w-[10%] text-center">
                  {currentTempName === "Celsius (°C)"
                    ? Math.round(temperature)
                    : Math.round(FahrenheitConverter(temperature))}
                  °
                </h6>
              </main>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Hours;
