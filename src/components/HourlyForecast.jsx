import { useWeather } from "../contexts/Weather";
import Dropdown from "../ui/Dropdown";
import { addDays, format, eachDayOfInterval } from "date-fns";
import Hours from "./Hours";

function HourlyForecast() {
  const { currentDay, dispatch } = useWeather();
  const endDate = addDays(new Date(), 6);

  const result = eachDayOfInterval({
    start: new Date(),
    end: new Date(endDate),
  });

  return (
    <main className="w-[37%] bg-[#262540] rounded-2xl flex flex-col items-start gap-2 overflow-hidden  pt-4  pb-2 ">
      <div className="flex justify-between w-full items-center px-4 ">
        <h3 className="font-DM_SANS text-white font-semibold text-[16px] leading-[120%] tracking-[-2%]">
          Hourly forecast
        </h3>
        <div className="relative">
          <Dropdown>
            <Dropdown.Open
              open="days"
              style="font-DM_SANS text-[14px] font-medium text-white flex items-center  bg-[#3C3B5E] w-[120px] justify-between px-2 py-1.5 rounded-md cursor-pointer"
            >
              <h2 className="max-w-[90px] text-left">
                {" "}
                {format(currentDay, "EEEE")}
              </h2>
            </Dropdown.Open>

            <Dropdown.List
              open="days"
              style="fixed w-[214px] bg-[#262540] rounded-md ring-1 ring-[#3C3B5E] mt-2 ml-[-7rem] shadow-lg"
            >
              <div className="flex flex-col gap-3 px-2 py-2 ">
                {result.map((day, index) => {
                  // console.log(day, currentDay);
                  return (
                    <button
                      className={`${
                        format(currentDay, "eee MMM dd yyyy") ===
                        format(day, "eee MMM dd yyyy")
                          ? "font-DM_SANS text-[16px] text-white text-left font-medium leading-[120%] cursor-pointer bg-[#302F4A] py-2.5 px-2 rounded-sm"
                          : "font-DM_SANS text-[16px] text-white text-left font-medium leading-[120%] cursor-pointer hover:bg-[#302F4A] py-2.5 px-2 rounded-sm"
                      }`}
                      key={index}
                      onClick={() =>
                        dispatch({ type: "change/Day", payload: day })
                      }
                    >
                      {format(day, "EEEE")}
                    </button>
                  );
                })}
              </div>
            </Dropdown.List>
          </Dropdown>
        </div>
      </div>
      <div className="w-full overflow-y-scroll cursor-pointer ">
        <div className="w-[99%] px-3 ">
          <Hours />
        </div>
      </div>
    </main>
  );
}

export default HourlyForecast;
