import Dropdown from "../ui/Dropdown";

function HourlyForecast() {
  return (
    <main className="w-[37%] bg-[#262540] rounded-2xl flex flex-col items-start px-5 py-4 ">
      <div className="flex justify-between w-full items-center">
        <h3 className="font-DM_SANS text-white font-semibold text-[16px] leading-[120%] tracking-[-2%]">
          Hourly forecast
        </h3>
        <div className="relative">
          <Dropdown>
            <Dropdown.Open
              open="days"
              style="font-DM_SANS text-[14px] font-medium text-white flex items-center gap-3 bg-[#3C3B5E] px-3 py-1.5 rounded-md cursor-pointer"
            >
              Tuesday
            </Dropdown.Open>

            <Dropdown.List
              open="days"
              style="fixed w-[214px] bg-[#262540] rounded-md ring-1 ring-[#3C3B5E] mt-2 ml-[-7rem] shadow-lg"
            >
              <div className="flex flex-col gap-3 px-2 py-2">
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2.5 px-2 rounded-sm">
                  Monday
                </h3>
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2.5 px-2 rounded-sm">
                  Tuesday
                </h3>
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2.5 px-2 rounded-sm">
                  Wednesday
                </h3>
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2.5 px-2 rounded-sm">
                  Thursday
                </h3>
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2.5 px-2 rounded-sm">
                  Friday
                </h3>
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2.5 px-2 rounded-sm">
                  Saturday
                </h3>
                <h3 className="font-DM_SANS text-[16px] text-white font-medium leading-[120%] bg-[#302F4A] py-2.5 px-2 rounded-sm">
                  Sunday
                </h3>
              </div>
            </Dropdown.List>
          </Dropdown>
        </div>
      </div>
    </main>
  );
}

export default HourlyForecast;
