import Logo from "../ui/Logo";
import Units from "./Units";

function Heading() {
  return (
    <div className="h-[43px] flex justify-between items-center ">
      <Logo />
      <Units />
    </div>
  );
}

export default Heading;
