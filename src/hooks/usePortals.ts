import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PORTALS } from "../core/constants";
import ms from "ms";
import CSClient from "../core/cs-client";
import Portal from "../entities/Portal";

const apiClient = new CSClient<Portal>("/react/portals");

const usePortals = () =>
  useQuery({
    queryKey: CACHE_KEY_PORTALS,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default usePortals;
