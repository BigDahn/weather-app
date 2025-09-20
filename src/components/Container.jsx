import { useWeatherForecast } from "../hooks/useWeatherForecast";
import Error from "./Error";
import Heading from "./Heading";
import Main from "./Main";

function Container() {
  const { error, isLoading, isPending, status } = useWeatherForecast();
  // console.log(error, isLoading, isPending, status);
  return (
    <div className="flex flex-col justify-start gap-4  min-h-[98vh] ">
      <Heading />

      <Main />
      {/* {error ? <Error /> : <Main />}
       */}
    </div>
  );
}

export default Container;

// <div className="py-1">
//
// </div>;
