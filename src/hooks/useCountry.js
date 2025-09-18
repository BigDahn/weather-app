import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/getCountry";
import { useWeather } from "../contexts/Weather";

export function useCountry() {
  const { searchValue, enabled, countryName, location } = useWeather();
  // console.log(location.name);
  const {
    data: { results } = {},
    isLoading = true,
    isFetched,
    status,
    isFetching,
  } = useQuery({
    queryKey: ["country", searchValue],
    queryFn: () => getCountry(searchValue),
    enabled: enabled,
  });

  return { results, isLoading, isFetched, isFetching, status };
}
