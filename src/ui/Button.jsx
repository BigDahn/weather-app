import React from "react";

function Button({ onClick, disabled, className, children }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
