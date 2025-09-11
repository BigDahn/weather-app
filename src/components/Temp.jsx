import React from "react";
import { useWeather } from "../contexts/Weather";

function Temp() {
  const { temp, dispatch } = useWeather();
  return (
    <div className=" border-b  border-[#3C3B5E] flex flex-col gap-2 pb-1.5">
      <h2 className="font-DM_SANS text-[13px] font-medium leading-[120%] text-[#ACACB7]">
        Temperature
      </h2>
      {temp.map((data, index) => {
        return (
          <button
            className="flex flex-col gap-2 cursor-pointer"
            key={index}
            onClick={() => dispatch({ type: "temp/change", payload: index })}
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

export default Temp;
