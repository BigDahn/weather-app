import Dropdown from "../ui/Dropdown";
import Temp from "./Temp";
import WindSpeed from "./WindSpeed";
import Precipitation from "./Precipitation";
import { useWeather } from "../contexts/Weather";

function Units() {
  const { unit, dispatch } = useWeather();
  return (
    <div className="relative">
      <Dropdown>
        <Dropdown.Open
          open="settings"
          style=" w-[90px] lg:w-[119px] bg-[#262540] flex items-center justify-center gap-2 lg:gap-3 h-[33px] lg:h-[43px] rounded-sm cursor-pointer"
        >
          <img src="/images/icon-units.svg" />
          <span className="text-white text-[13px] lg:text-[16px] font-DM_SANS font-medium">
            Units
          </span>
        </Dropdown.Open>
        <Dropdown.List
          open="settings"
          style="fixed  w-[214px] bg-[#262540] rounded-sm ring-1 ring-[#3C3B5E] mt-2 ml-[-7.7rem] lg:ml-[-6rem] shadow-lg z-[99] "
        >
          <div className="flex flex-col gap-2 py-1 px-1">
            <button
              className="font-DM_SANS text-[14px] text-white font-medium leading-[120%] hover:bg-[#302F4A] py-2 px-2 rounded-sm flex flex-start cursor-pointer"
              onClick={() => dispatch({ type: "unit/change" })}
            >
              Switch to {unit}
            </button>

            <Temp />
            <WindSpeed />
            <Precipitation />
          </div>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}

export default Units;
