import React from "react";
import DailyForeCast from "./DailyForeCast";

function Country() {
  return (
    <div className="w-[80%] h-full flex flex-col gap-[0.6rem] ">
      <main className=" grow flex flex-col gap-[1em]">
        <div className="bg-[url(/images/bg-today-large.svg)] bg-cover bg-center  bg-no-repeat rounded-lg h-[62%] ">
          sds
        </div>

        <main className="flex gap-4">
          <div className="w-[182px] h-[118px] bg-[#262540] rounded-md">1</div>
          <div className="w-[182px] h-[118px] bg-[#262540] rounded-md">2</div>
          <div className="w-[182px] h-[118px] bg-[#262540] rounded-md">3</div>
          <div className="w-[182px] h-[118px] bg-[#262540] rounded-md">4</div>
        </main>
      </main>

      <div className=" flex flex-col gap-2">
        <h1 className="text-white font-DM_SANS font-semibold text-[20px]">
          Daily forecast
        </h1>
        <DailyForeCast />
      </div>
    </div>
  );
}

export default Country;
