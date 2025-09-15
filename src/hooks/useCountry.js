import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/getCountry";
import { useWeather } from "../contexts/Weather";

export function useCountry() {
  const { location } = useWeather();
  // console.log(countryName);
  const { data: { results } = {}, isLoading = true } = useQuery({
    queryKey: ["country", location],
    queryFn: () => getCountry(location),
  });

  return { results, isLoading };
}
