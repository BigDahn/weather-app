import React from "react";
import Header from "../ui/Header";
import Input from "../ui/Input";

function SearchBar() {
  return (
    <div className="flex flex-col gap-[4rem]  items-center justify-center ">
      <Header />
      <Input />
    </div>
  );
}

export default SearchBar;
