import { useWeather } from "../contexts/Weather";
import { useCountry } from "../hooks/useCountry";
import Loader from "./Loader";

function SearchModal() {
  const { results, isLoading } = useCountry();
  const { location } = useWeather();

  return (
    <div
      className={`${
        results?.length > 4 && !isLoading
          ? "w-[526px] bg-[#262540] rounded-md px-2 max-h-[200px] overflow-y-scroll  "
          : "w-[526px] bg-[#262540] rounded-md px-2 max-h-[200px]  overflow-hidden "
      }`}
    >
      {isLoading || !results ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-1.5 py-2">
          {results?.map((s) => {
            const {
              latitude,
              longitude,
              name,
              country,
              country_id,
              country_code,
              timezone,
              admin1,
            } = s;
            return (
              <button
                key={[latitude, longitude]}
                className="flex items-center gap-x-4 text-white py-1 hover:bg-[#302F4A] rounded-md px-3 cursor-pointer"
                onClick={() =>
                  console.log({
                    name: name,
                    latitude: latitude,
                    longitude: longitude,
                    country: country,
                    timezone: timezone,
                  })
                }
              >
                <img
                  src={`https://flagsapi.com/${country_code}/flat/64.png`}
                  className="w-[20px]"
                />

                <div className="flex flex-col items-start">
                  <h2 className="font-DM_SANS text-[16px] font-medium leading-[120%]">
                    {name}
                  </h2>
                  <p className="text-[10px]">
                    {country} <span>({admin1})</span>
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchModal;
