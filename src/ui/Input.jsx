import React from "react";
import Button from "./Button";
import SearchModal from "./SearchModal";
import { useWeather } from "../contexts/Weather";
import { useCountry } from "../hooks/useCountry";
import { CircleX } from "lucide-react";

function Input() {
  const {
    countryName,
    dispatch,
    setCountryName,
    searchModal,
    setEnabled,
    location,
  } = useWeather();

  const { results } = useCountry();

  const searchBtn = (countryName) => {
    dispatch({ type: "input/name", payload: countryName });
    setEnabled(true);
  };

  const clearBtn = () => {
    dispatch({ type: "clear/search" });
    setCountryName("");
  };

  // h-[343px]
  return (
    <main className="w-full lg:w-[656px]   ">
      <div className=" lg:w-[656px] w-full h-[112px]   md:h-[46px] flex flex-col justify-start gap-2  md:flex-row md:justify-between items-center ">
        <div className="relative  flex items-center w-full   ">
          <input
            type="text"
            placeholder="Search for a place..."
            className=" w-full md:w-[98%] lg:w-[526px] h-[53px] lg:h-full bg-[#262540] rounded-lg  px-[3rem] text-[#D4D3D9] outline-none placeholder:text-[#D4D3D9] font-DM_SANS text-[15px]"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <img
            src="/images/icon-search.svg"
            className="absolute ml-2 w-[20px]"
          />
          {countryName && (
            <CircleX
              color="white"
              size={14}
              className="absolute ml-[93%] lg:ml-[31.7rem] cursor-pointer"
              role="button"
              onClick={() => clearBtn()}
            />
          )}
        </div>
        <Button
          onClick={() => searchBtn(countryName)}
          disabled={!countryName}
          className="bg-[#4658D9] text-white md:w-[114px] rounded-lg text-[18px] font-medium font-DM_SANS leading-[120%] cursor-pointer disabled:bg-blue-900 disabled:cursor-not-allowed h-[56px] w-full md:h-[53px]"
        >
          search
        </Button>
      </div>
      {searchModal && results?.length >= 1 && (
        <div
          className="
        fixed z-[9999] mt-3"
        >
          <SearchModal />
        </div>
      )}
    </main>
  );
}

export default Input;
