import React from "react";

function Button({ onClick, disabled }) {
  return (
    <button
      className="bg-[#4658D9] text-white w-[114px] rounded-lg text-[18px] font-medium font-DM_SANS leading-[120%] cursor-pointer disabled:bg-blue-900 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      search
    </button>
  );
}

export default Button;
