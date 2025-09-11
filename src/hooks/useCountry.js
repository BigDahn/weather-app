import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/getCountry";
import { useWeather } from "../contexts/Weather";

export function useCountry() {
  const { countryName } = useWeather();
  // console.log(countryName);
  const { data: { results } = {}, isLoading = true } = useQuery({
    queryKey: ["country", countryName],
    queryFn: () => getCountry(countryName),
  });

  return { results, isLoading };
}
