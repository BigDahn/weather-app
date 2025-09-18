import Country from "./Country";
import HourlyForecast from "./HourlyForecast";

function WeatherContainer() {
  return (
    <div className="flex w-full gap-5 justify-center h-[550px] items-start">
      <Country />
      <HourlyForecast />
    </div>
  );
}

export default WeatherContainer;
