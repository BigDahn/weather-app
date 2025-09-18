import { useWeather } from "../contexts/Weather";
import Dropdown from "../ui/Dropdown";
import { addDays, format, eachDayOfInterval } from "date-fns";
import Hours from "./Hours";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

function HourlyForecast() {
  const { currentDay, dispatch, location } = useWeather();
  const { data } = useWeatherForecast();
  const { current = {} } = data;

  const endDate = addDays(current.time, 6);

  const result = eachDayOfInterval({
    start: current.time,
    end: new Date(endDate),
  });

  const checkDay = currentDay ?? current.time;

  return (
    <main className="w-[37%] bg-[#262540] h-full rounded-lg flex flex-col items-start gap-2 overflow-hidden  pt-4  pb-2 ">
      <div className="flex justify-between w-full items-center px-4 ">
        <h3 className="font-DM_SANS text-white font-semibold text-[16px] leading-[120%] tracking-[-2%]">
          Hourly forecast
        </h3>
        <div className="relative">
          <Dropdown>
            <Dropdown.Open
              open="days"
              style={
                current.time
                  ? "font-DM_SANS text-[14px] font-medium text-white flex items-center  bg-[#3C3B5E] w-[120px] justify-between px-2 py-1.5 rounded-md cursor-pointer"
                  : "font-DM_SANS text-[14px] font-medium text-white flex items-center  bg-[#3C3B5E] w-[60px] justify-between px-2 py-3 rounded-md cursor-pointer"
              }
            >
              <h2 className="max-w-[90px] text-left">
                {current.time ? (
                  format(checkDay, "EEEE")
                ) : (
                  <p className="border-b border-2 w-[14px]"></p>
                )}
              </h2>
            </Dropdown.Open>

            <Dropdown.List
              open="days"
              style={
                location.name
                  ? "fixed w-[214px] bg-[#262540] rounded-md ring-1 ring-[#3C3B5E] mt-2 ml-[-7rem] shadow-lg"
                  : "fixed w-[200px] bg-[#262540] rounded-md ring-1 ring-[#3C3B5E] mt-2 ml-[-9rem] shadow-lg hidden"
              }
            >
              {location.name && (
                <div className="flex flex-col gap-3 px-2 py-2 ">
                  {result.map((day, index) => {
                    // console.log(day, currentDay);
                    return (
                      <button
                        className={`${
                          format(checkDay, "eee MMM dd yyyy") ===
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
              )}
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
