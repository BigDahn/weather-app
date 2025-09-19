import SearchBar from "./SearchBar";
import WeatherContainer from "./WeatherContainer";

function Body() {
  return (
    <div className="flex flex-col gap-4   w-full ">
      <SearchBar />
      <WeatherContainer />
    </div>
  );
}

export default Body;
