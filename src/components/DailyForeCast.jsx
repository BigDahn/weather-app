import { useWeather } from "../contexts/Weather";
import { format } from "date-fns";

import { FahrenheitConverter } from "../utils/calculator";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { FilterFunction } from "../utils/FilterFunction";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

const defaultTime = Array.from({ length: 7 }, (i, k) => k);

function DailyForeCast() {
  const { temp } = useWeather();
  const { data, isLoading } = useWeatherForecast();

  const { daily = {} } = data;
  const currentTempName = FilterFunction(temp);

  // // console.log(format("2025-09-18T08:15", "Pp"));
  // console.log(format("2025-09-18T18:30", "Pp"));

  const { time, temperature_2m_max, temperature_2m_min, weather_code } = daily;
  return (
    <div className="grid grid-cols-3 md:flex gap-3">
      {isLoading || Object.keys(daily).length < 1
        ? defaultTime.map((s) => {
            return (
              <div
                key={s}
                className="lg:w-[100px] md:w-[110px] h-[130px] bg-[#262540] rounded-md px-3 flex flex-col justify-center shadow-md ring-1 ring-[#3C3B5E] "
              ></div>
            );
          })
        : time?.map((s, i) => {
            return (
              <div
                key={i}
                className="lg:w-[100px] md:w-[110px]  h-[130px] bg-[#262540] rounded-md px-3 flex flex-col justify-center"
              >
                <div className="flex flex-col items-center">
                  <h3 className="font-DM_SANS text-[18px] text-white font-medium leading-[120%]">
                    {format(s, "EEE")}
                  </h3>

                  <img
                    src={getWeatherIcon(weather_code[i], 1)}
                    className="w-[60px]"
                  />
                </div>
                <div className="flex justify-between pt-2">
                  <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%]">
                    {currentTempName === "Celsius (°C)"
                      ? Math.round(temperature_2m_max[i])
                      : Math.round(FahrenheitConverter(temperature_2m_max[i]))}
                    °
                  </h3>
                  <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%]">
                    {currentTempName === "Celsius (°C)"
                      ? Math.round(temperature_2m_min[i])
                      : Math.round(
                          FahrenheitConverter(temperature_2m_min[i])
                        )}{" "}
                    °
                  </h3>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default DailyForeCast;
