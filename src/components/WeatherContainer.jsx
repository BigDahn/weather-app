import Country from "./Country";
import HourForecast from "./HourForecast";

function WeatherContainer() {
  return (
    <div className="flex gap-4 h-[550px]">
      <Country />
      <HourForecast />
    </div>
  );
}

export default WeatherContainer;
