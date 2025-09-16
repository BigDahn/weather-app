import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/getCountry";
import { useWeather } from "../contexts/Weather";

export function useCountry() {
  const { searchValue } = useWeather();
  // console.log(countryName);
  const { data: { results } = {}, isLoading = true } = useQuery({
    queryKey: ["country", searchValue],
    queryFn: () => getCountry(searchValue),
  });

  return { results, isLoading };
}
