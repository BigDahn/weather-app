import Header from "../ui/Header";
import Body from "./Body";

function Main() {
  return (
    <main>
      <div className="flex  flex-col items-center gap-4">
        <Header />
        <section className="w-full ">
          <Body />
        </section>
      </div>
    </main>
  );
}

export default Main;
