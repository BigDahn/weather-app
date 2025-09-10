import Header from "../ui/Header";
import Body from "./Body";

function Main() {
  return (
    <div className="flex  flex-col items-center gap-4">
      <Header />
      <section className="w-full">
        <Body />
      </section>
    </div>
  );
}

export default Main;
