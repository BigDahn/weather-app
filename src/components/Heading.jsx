import React from "react";

function Heading() {
  return (
    <div className="h-[43px] flex justify-between items-center ">
      <img src="/images/logo.svg" />
      <div className="w-[119px] bg-[#262540] flex items-center justify-center gap-3 h-[43px] rounded-sm">
        <img src="/images/icon-units.svg" />
        <span className="text-white text-[16px]">Units</span>
        <img src="/images/icon-dropdown.svg" />
      </div>
    </div>
  );
}

export default Heading;
