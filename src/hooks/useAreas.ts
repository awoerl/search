import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_AREAS, CACHE_KEY_PLATFORMS  } from "../constants";
import ms from 'ms';
import Area from "../entities/Area";
import CSClient from "../services/cs-client";

const apiClient = new CSClient<Area>('/areas');

const useAreas = () => useQuery({
  queryKey: CACHE_KEY_AREAS,
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
 });   

export default useAreas;