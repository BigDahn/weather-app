import Logo from "../ui/Logo";
import Units from "./Units";

function Heading() {
  return (
    <header className="flex justify-between items-center ">
      <Logo />
      <Units />
    </header>
  );
}

export default Heading;
