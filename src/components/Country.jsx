import DailyForeCast from "./DailyForeCast";

function Country() {
  return (
    <div className="w-[80%] h-full flex flex-col gap-[0.6rem] ">
      <main className=" grow flex flex-col gap-[1em]">
        <div className="bg-[url(/images/bg-today-large.svg)] bg-cover bg-center  bg-no-repeat rounded-lg h-[62%] flex items-center pl-4 pr-5  justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-DM_SANS text-white text-[26px] font-bold leading-[120%]">
              Berlin, Germany
            </h3>
            <h4 className="font-DM_SANS text-white text-[15px] font-medium leading-[120%]">
              Tuesday, Aug 5, 2025
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/icon-sunny.webp" className="w-[120px]" />
            <h2 className="font-DM_SANS text-white font-semibold text-[86px] leading-[100%] tracking-[-2%] italic">
              20°
            </h2>
          </div>
        </div>

        <main className="flex gap-[1em]">
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Feels Like
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              18°
            </h2>
          </div>
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Humidity
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              46%
            </h2>
          </div>
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Wind
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              14 km/h
            </h2>
          </div>
          <div className="w-[180px] h-[110px] bg-[#262540] rounded-md flex flex-col justify-center px-4 gap-6">
            <h5 className="font-DM_SANS text-[18px] text-[#D4D3D9] leading-[120%] font-medium">
              Precipitation
            </h5>
            <h2 className="font-DM_SANS text-[#FFFFFF] font-light text-[30px] leading-[100%]">
              0 mm
            </h2>
          </div>
        </main>
      </main>

      <div className=" flex flex-col gap-2">
        <h1 className="text-white font-DM_SANS font-semibold text-[17px]">
          Daily forecast
        </h1>
        <DailyForeCast />
      </div>
    </div>
  );
}

export default Country;
