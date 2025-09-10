import React from "react";
import Dropdown from "../ui/Dropdown";

function Heading() {
  return (
    <div className="h-[43px] flex justify-between items-center ">
      <img src="/images/logo.svg" />
      <div className="relative">
        <Dropdown>
          <Dropdown.Open
            open="settings"
            style="w-[119px] bg-[#262540] flex items-center justify-center gap-3 h-[43px] rounded-sm cursor-pointer"
          >
            <img src="/images/icon-units.svg" />
            <span className="text-white text-[16px] font-DM_SANS font-medium">
              Units
            </span>
          </Dropdown.Open>
          <Dropdown.List
            open="settings"
            style="fixed  w-[214px] bg-[#262540] rounded-sm ring-1 ring-[#3C3B5E] mt-2 ml-[-6rem] shadow-lg z-[99] "
          >
            <div className="flex flex-col gap-2 py-1 px-1">
              <div>
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm">
                  Switch to Imperial
                </h3>
              </div>
              <div className=" border-b  border-[#3C3B5E] flex flex-col gap-2 pb-1.5">
                <h2 className="font-DM_SANS text-[13px] font-medium leading-[120%] text-[#ACACB7]">
                  Temperature
                </h2>
                <div className="flex flex-col gap-2">
                  <h3 className="font-DM_SANS text-[14px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm">
                    Celsius (°C)
                  </h3>
                  <h3 className="font-DM_SANS text-[14px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm">
                    Fahrenheit (°F)
                  </h3>
                </div>
              </div>
              <div className="border-b border-[#3C3B5E] flex flex-col gap-2 pb-1.5">
                <h2 className="font-DM_SANS text-[13px] font-medium leading-[120%] text-[#ACACB7]">
                  Wind Speed
                </h2>
                <div className="flex flex-col gap-2">
                  <h3 className="font-DM_SANS text-[14px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm">
                    km/h
                  </h3>
                  <h3 className="font-DM_SANS text-[14px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm">
                    mph
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-2 pb-1.5">
                <h2 className="font-DM_SANS text-[13px] font-medium leading-[120%] text-[#ACACB7]">
                  Precipitation
                </h2>
                <div className="flex flex-col gap-2">
                  <h3 className="font-DM_SANS text-[14px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm">
                    Millimeters (mm)
                  </h3>
                  <h3 className="font-DM_SANS text-[14px] text-white font-medium leading-[120%] bg-[#302F4A] py-2 px-2 rounded-sm">
                    Inches (in)
                  </h3>
                </div>
              </div>
            </div>
          </Dropdown.List>
        </Dropdown>
      </div>
    </div>
  );
}

export default Heading;
