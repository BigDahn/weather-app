import Heading from "./Heading";
import Main from "./Main";

function Container() {
  return (
    <div className="flex flex-col gap-[0.7rem]  ">
      <Heading />
      <Main />
    </div>
  );
}

export default Container;
