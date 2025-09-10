import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/getCountry";

export function useCountry() {
  const { data: { results } = {}, isLoading = true } = useQuery({
    queryKey: ["country"],
    queryFn: () => getCountry("Ado-Ekiti"),
  });

  return { results, isLoading };
}
