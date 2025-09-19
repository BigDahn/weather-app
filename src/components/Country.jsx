import { format } from "date-fns";

import DailyForeCast from "./DailyForeCast";

import { useWeather } from "../contexts/Weather";
import {
  FahrenheitConverter,
  InchesConverter,
  MphConverter,
} from "../utils/calculator";
import { FilterFunction } from "../utils/FilterFunction";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

function Country() {
  const { temp, Precipitation, windSpeed, location } = useWeather();
  const { data, isLoading } = useWeatherForecast();

  const { current = {} } = data;

  // console.log(data, isLoading);

  const currentTempName = FilterFunction(temp);
  const precipitationChanged = FilterFunction(Precipitation);
  const windSpeedChanged = FilterFunction(windSpeed);

  const {
    temperature_2m,
    precipitation,
    wind_speed_10m,
    relative_humidity_2m,
    time,
    apparent_temperature,
    is_day,
    weather_code,
  } = current;

  // console.log(current);

  return (
    <div className="lg:w-[80%] h-full flex flex-col gap-[0.6rem] lg:px-0.5">
      <main className=" flex grow flex-col gap-y-3  ">
        {isLoading || Object.keys(current).length < 1 ? (
          <div className="bg-[#262540] rounded-lg h-[310px] lg:h-[62%] flex flex-col items-center px-4 justify-center shadow-md ring-1 ring-[#3C3B5E] ">
            <div>
              <div className="flex gap-x-2 space-y-2 relative z-10">
                <h3 className="h-[12px] w-[12px] rounded-full bg-white"></h3>
                <h3 className="h-[12px] w-[12px] rounded-full bg-white relative bottom-2"></h3>
                <h3 className="h-[12px] w-[12px] rounded-full bg-white"></h3>
              </div>
            </div>

            <h5 className="text-white font-DM_SANS text-[16px] font-medium leading-[120%]">
              Loading...
            </h5>
          </div>
        ) : (
          <div className="bg-[url(/images/bg-today-large.svg)] bg-cover bg-center  bg-no-repeat rounded-lg  h-[310px] lg:h-[62%] flex items-center px-4  justify-between ">
            <div className="flex flex-col gap-2">
              <h3 className="font-DM_SANS text-white text-[26px] font-bold leading-[120%]">
                {location.name}, {location.country}
              </h3>
              <h4 className="font-DM_SANS text-white text-[16px] font-medium leading-[120%]">
                {format(time, "EEEE, MMM dd, yyyy")}
              </h4>
            </div>
            <div className="flex items-center justify-between w-[294px]">
              <img
                src={getWeatherIcon(weather_code, is_day)}
                className={`${is_day ? "w-[110px]" : "w-[80px]"}`}
              />
              <h2 className="font-DM_SANS text-white font-semibold text-[86px] leading-[100%] tracking-[-2%] italic">
                {currentTempName === "Celsius (°C)"
                  ? Math.round(temperature_2m)
                  : Math.round(FahrenheitConverter(temperature_2m))}
                °
              </h2>
            </div>
          </div>
        )}
        <main className=" grid grid-cols-2 gap-[1em] justify-evenly lg:flex lg:gap-[1em] lg:w-full lg:justify-evenly">
          <div className="lg:w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-between px-4 shadow-md ring-1 ring-[#3C3B5E]  ">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium pt-4">
              Feels Like
            </h5>

            {isLoading || Object.keys(current).length < 1 ? (
              <h2 className="border-b border-2 border-white w-[21px] mb-8"></h2>
            ) : (
              <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%] pb-4">
                {currentTempName === "Celsius (°C)"
                  ? Math.round(apparent_temperature)
                  : Math.round(FahrenheitConverter(apparent_temperature))}
                °
              </h2>
            )}
          </div>
          <div className="lg:w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-between px-4 shadow-md ring-1 ring-[#3C3B5E] ">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium pt-4">
              Humidity
            </h5>
            {isLoading || Object.keys(current).length < 1 ? (
              <h2 className="border-b border-2 border-white w-[21px] mb-8"></h2>
            ) : (
              <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%] pb-4">
                {relative_humidity_2m}%
              </h2>
            )}
          </div>
          <div className="lg:w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-between px-4 shadow-md ring-1 ring-[#3C3B5E]  ">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium pt-4">
              Wind
            </h5>
            {isLoading || Object.keys(current).length < 1 ? (
              <h2 className="border-b border-2 border-white w-[21px] mb-8"></h2>
            ) : (
              <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%] pb-4">
                {windSpeedChanged === "km/h"
                  ? Math.round(wind_speed_10m)
                  : MphConverter(wind_speed_10m)}
                {windSpeedChanged === "km/h" ? "km/h" : "mph"}
              </h2>
            )}
          </div>
          <div className="lg:w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-between px-4  shadow-md ring-1 ring-[#3C3B5E]  ">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium pt-4">
              Precipitation
            </h5>
            {isLoading || Object.keys(current).length < 1 ? (
              <h2 className="border-b border-2 border-white w-[21px] mb-8"></h2>
            ) : (
              <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%] pb-4">
                {precipitationChanged === "Millimeters (mm)"
                  ? Math.round(precipitation)
                  : InchesConverter(precipitation)}
                {precipitationChanged === "Millimeters (mm)" ? "mm" : "in"}
              </h2>
            )}
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
