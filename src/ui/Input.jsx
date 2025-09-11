import React from "react";
import Button from "./Button";
import SearchModal from "./SearchModal";
import { useWeather } from "../contexts/Weather";

function Input() {
  const { countryName, setCountryName } = useWeather();

  return (
    <main>
      <div className="w-[656px] h-[46px] flex justify-between">
        <div className="relative h-full flex items-center  ">
          <input
            type="text"
            placeholder="Search for a place..."
            className="w-[526px] h-full bg-[#262540] rounded-lg  px-[3rem] text-[#D4D3D9] outline-none placeholder:text-[#D4D3D9] font-DM_SANS text-[15px]"
            onChange={(e) => setCountryName(e.target.value)}
          />
          <img
            src="/images/icon-search.svg"
            className="absolute ml-2 w-[20px]"
          />
        </div>
        <Button />
      </div>
      {countryName && (
        <div className="fixed mt-3">
          <SearchModal />
        </div>
      )}
    </main>
  );
}

export default Input;
