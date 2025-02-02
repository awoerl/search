import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_KEYWORDS  } from "../constants";
import ms from 'ms';
import Keyword from "../entities/Keyword";
import CSClient from "../services/cs-client";

const apiClient = new CSClient<Keyword>('/deepsearch/areas');

const useKeywords = () => useQuery({
  queryKey: CACHE_KEY_KEYWORDS,
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
});   

export default useKeywords;