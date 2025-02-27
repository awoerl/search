import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_FACETS } from "../core/constants";
import ms from "ms";
import Area from "../entities/Area";
import CSClient from "../core/cs-client";

const apiClient = new CSClient<Area>("/facets");

const useFacets = () =>
  useQuery({
    queryKey: CACHE_KEY_FACETS,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default useFacets;
