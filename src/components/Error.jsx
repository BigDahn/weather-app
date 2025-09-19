import { useWeather } from "../contexts/Weather";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

function Error() {
  const { setEnableLocationSearch } = useWeather();

  const { refetch } = useWeatherForecast();

  const retryBtn = () => {
    setEnableLocationSearch(true);
    refetch();
    console.log("retry");
  };

  return (
    <div className=" flex flex-col items-center gap-4 py-8">
      <img src="/images/icon-error.svg" className="w-[30px]" />
      <div className="flex flex-col gap-3 items-center">
        <h2 className="font-Bricolage_Grotesque text-[52px] leading-[120%] text-white font-bold">
          Something went wrong
        </h2>
        <p className="text-center font-DM_SANS text-[20px] p-1 text-[#D4D3D9] font-medium leading-[120%]">
          We couldn't connect to the server (API error). Please try <br /> again
          in a few moments
        </p>
        <button
          className="flex gap-2 bg-[#262540] cursor-pointer outline-none shadow-md py-2 px-3 rounded-sm text-white font-DM_SANS font-medium text-[16px] leading-[120%] items-center"
          onClick={() => retryBtn()}
        >
          <img src="/images/icon-retry.svg" />
          Retry
        </button>
      </div>
    </div>
  );
}

export default Error;
