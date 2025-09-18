import { useQuery } from "@tanstack/react-query";
import { getWeatherInfo } from "../services/getWeatherInfo";
import { useWeather } from "../contexts/Weather";

export function useWeatherForecast() {
  const { location } = useWeather();

  //console.log(location);
  const {
    data = {},
    isLoading = true,
    isPending,
    error,
  } = useQuery({
    queryKey: ["forecast", location.latitude, location.longitude],
    queryFn: () => getWeatherInfo(location),
  });

  return { data, isLoading, error, isPending };
}
