import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_AREAS } from "../core/constants";
import ms from "ms";
import Area from "../entities/Area";
import CSClient from "../core/cs-client";

const apiClient = new CSClient<Area>("/deepsearch/areas");

const useAreas = () =>
  useQuery({
    queryKey: CACHE_KEY_AREAS,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default useAreas;
