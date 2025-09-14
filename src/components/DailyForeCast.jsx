import { useWeather } from "../contexts/Weather";
import { format } from "date-fns";
import { weatherData } from "../services/getWeatherInfo";
import { FahrenheitConverter } from "../utils/calculator";
import { getWeatherIcon } from "../utils/getWeatherIcon";

function DailyForeCast() {
  const { temp } = useWeather();

  const currentTempName = temp.filter((s) => s.isChecked)[0].name;

  const { daily } = weatherData;

  const { time, temperature_2m_max, temperature_2m_min, weather_code } = daily;
  return (
    <div className="flex gap-3">
      {time.map((s, i) => {
        return (
          <div
            key={i}
            className="w-[100px] h-[130px] bg-[#262540] rounded-md px-3 flex flex-col justify-center"
          >
            <div className="flex flex-col items-center">
              <h3 className="font-DM_SANS text-[18px] text-white font-medium leading-[120%]">
                {format(s, "EEE")}
              </h3>

              <img src={getWeatherIcon(weather_code[i])} className="w-[60px]" />
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
                  : Math.round(FahrenheitConverter(temperature_2m_min[i]))}{" "}
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
