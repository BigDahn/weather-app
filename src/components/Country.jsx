import { format } from "date-fns";

import DailyForeCast from "./DailyForeCast";
import { weatherData } from "../services/getWeatherInfo";
import { useWeather } from "../contexts/Weather";
import {
  FahrenheitConverter,
  InchesConverter,
  MphConverter,
} from "../utils/calculator";

function Country() {
  const { temp, Precipitation, windSpeed } = useWeather();
  const { current } = weatherData;

  const currentTempName = temp.filter((s) => s.isChecked)[0].name;
  const precipitationChanged = Precipitation.filter((s) => s.isChecked)[0].name;
  const windSpeedChanged = windSpeed.filter((s) => s.isChecked)[0].name;

  const {
    temperature_2m,
    precipitation,
    wind_speed_10m,
    relative_humidity_2m,
    time,
  } = current;
  return (
    <div className="w-[80%] h-full flex flex-col gap-[0.6rem] ">
      <main className=" grow flex flex-col gap-[1em]">
        <div className="bg-[url(/images/bg-today-large.svg)] bg-cover bg-center  bg-no-repeat rounded-lg h-[62%] flex items-center px-4  justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-DM_SANS text-white text-[26px] font-bold leading-[120%]">
              Berlin, Germany
            </h3>
            <h4 className="font-DM_SANS text-white text-[16px] font-medium leading-[120%]">
              {format(time, "EEEE, MMM dd, yyyy")}
            </h4>
          </div>
          <div className="flex items-center justify-between w-[294px]">
            <img src="/images/icon-sunny.webp" className="w-[120px]" />
            <h2 className="font-DM_SANS text-white font-semibold text-[86px] leading-[100%] tracking-[-2%] italic">
              {currentTempName === "Celsius (°C)"
                ? Math.round(temperature_2m)
                : Math.round(FahrenheitConverter(temperature_2m))}
              °
            </h2>
          </div>
        </div>

        <main className="flex gap-[1em]">
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Feels Like
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              {currentTempName === "Celsius (°C)"
                ? Math.round(temperature_2m)
                : Math.round(FahrenheitConverter(temperature_2m))}
              °
            </h2>
          </div>
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Humidity
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              {relative_humidity_2m}%
            </h2>
          </div>
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Wind
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              {windSpeedChanged === "km/h"
                ? Math.round(wind_speed_10m)
                : MphConverter(wind_speed_10m)}
              {windSpeedChanged === "km/h" ? "km/h" : "mph"}
            </h2>
          </div>
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Precipitation
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              {precipitationChanged === "Millimeters (mm)"
                ? Math.round(precipitation)
                : InchesConverter(precipitation)}
              {precipitationChanged === "Millimeters (mm)" ? "mm" : "in"}
            </h2>
          </div>
        </main>
      </main>

      <div className=" flex flex-col gap-2">
        <h1 className="text-white font-DM_SANS font-semibold text-[17px]">
          Daily forecast
        </h1>
        <DailyForeCast />
      </div>
    </div>
  );
}

export default Country;
