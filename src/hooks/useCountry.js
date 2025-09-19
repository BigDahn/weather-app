import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/getCountry";
import { useWeather } from "../contexts/Weather";

export function useCountry() {
  const { searchValue, enabled } = useWeather();

  const { data: { results } = {}, isLoading = true } = useQuery({
    queryKey: ["country", searchValue],
    queryFn: () => getCountry(searchValue),
    enabled: enabled,
  });

  return { results, isLoading };
}
