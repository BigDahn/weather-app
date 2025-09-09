import React from "react";
import Heading from "./Heading";
import Body from "./Body";

function Main() {
  return (
    <div className=" min-h-fit flex flex-col gap-[1rem]">
      <Heading />
      <Body />
    </div>
  );
}

export default Main;
