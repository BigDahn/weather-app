import { useWeather } from "../contexts/Weather";
import { useCountry } from "../hooks/useCountry";
import { useWeatherForecast } from "../hooks/useWeatherForecast";
import Country from "./Country";
import HourlyForecast from "./HourlyForecast";
import NotFound from "./NotFound";

function WeatherContainer() {
  const {
    results = [],
    isLoading,
    // isFetched,
    // isFetching,
    // status,
  } = useCountry();
  const { searchValue, enabled } = useWeather();

  console.log(results, isLoading, enabled, searchValue);
  return (
    <>
      {!isLoading && enabled && results?.length < 1 ? (
        <NotFound />
      ) : (
        <div className="flex w-full gap-5 justify-center h-[550px] items-start">
          <Country />
          <HourlyForecast />
        </div>
      )}
    </>
  );
}

export default WeatherContainer;
