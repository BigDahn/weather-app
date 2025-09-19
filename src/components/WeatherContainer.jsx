import { useWeather } from "../contexts/Weather";
import { useCountry } from "../hooks/useCountry";
import Country from "./Country";
import HourlyForecast from "./HourlyForecast";
import NotFound from "./NotFound";

function WeatherContainer() {
  const { results = [], isLoading } = useCountry();
  const { enabled } = useWeather();

  return (
    <>
      {!isLoading && enabled && results?.length < 1 ? (
        <NotFound />
      ) : (
        <div className="flex flex-col lg:flex-row w-full gap-5 justify-center  lg:h-[550px]  lg:items-start">
          <Country />
          <HourlyForecast />
        </div>
      )}
    </>
  );
}

export default WeatherContainer;
