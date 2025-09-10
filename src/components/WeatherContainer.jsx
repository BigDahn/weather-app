import Country from "./Country";
import HourlyForecast from "./HourlyForecast";

function WeatherContainer() {
  return (
    <div className="flex gap-4 h-[550px]">
      <Country />
      <HourlyForecast />
    </div>
  );
}

export default WeatherContainer;
