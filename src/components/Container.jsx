import Heading from "./Heading";
import Main from "./Main";

function Container() {
  return (
    <div className="flex flex-col justify-center gap-4  min-h-[98vh] ">
      <div>
        {" "}
        <Heading />
      </div>
      <div className="py-1">
        <Main />
      </div>
    </div>
  );
}

export default Container;
