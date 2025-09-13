import { useWeather } from "../contexts/Weather";

export default function Precipitation() {
  const { Precipitation, dispatch } = useWeather();
  return (
    <div className="flex flex-col gap-2 pb-1.5">
      <h2 className="font-DM_SANS text-[13px] font-medium leading-[120%] text-[#ACACB7]">
        Precipitation
      </h2>
      {Precipitation.map((data, index) => {
        return (
          <button
            className="flex flex-col gap-2 cursor-pointer"
            key={index}
            onClick={() => dispatch({ type: "prep/change", payload: index })}
          >
            <h3
              className={`${
                data.isChecked
                  ? "font-DM_SANS text-[14px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm flex justify-between items-center "
                  : "font-DM_SANS text-[14px] text-white font-medium leading-[120%]  py-2 px-2 rounded-sm flex justify-between items-center "
              }`}
            >
              {data.name}
              {data.isChecked && <img src="/images/icon-checkmark.svg" />}
            </h3>
          </button>
        );
      })}
    </div>
  );
}
