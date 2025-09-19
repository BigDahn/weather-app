import { useQuery } from "@tanstack/react-query";
import { getWeatherInfo } from "../services/getWeatherInfo";
import { useWeather } from "../contexts/Weather";

export function useWeatherForecast() {
  const { location, enableLocationSearch } = useWeather();

  const {
    data = {},
    isLoading = true,
    isPending,
    error,
    status,
    refetch,
  } = useQuery({
    queryKey: ["forecast", location.latitude, location.longitude],
    queryFn: () => getWeatherInfo(location),
    // refetchOnMount: false,
    retry: 1,
    enabled: enableLocationSearch,
  });

  return { data, isLoading, error, isPending, status, refetch };
}
