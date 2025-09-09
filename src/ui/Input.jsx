import React from "react";
import Button from "./Button";

function Input() {
  return (
    <div className="w-[656px] h-[46px] flex justify-between">
      <input
        type="text"
        placeholder="Search for a place..."
        className="w-[526px] bg-[#262540] rounded-lg relative px-[3rem] text-[#D4D3D9] outline-none placeholder:text-[#D4D3D9] font-DM_SANS text-[20px]"
      />
      <img
        src="/images/icon-search.svg"
        className="absolute bottom-[34.2rem] left-[29rem]"
      />
      <Button />
    </div>
  );
}

export default Input;
