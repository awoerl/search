import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_LISTINGS  } from "../constants";
import CSClient from "../services/cs-client";
import ms from 'ms';
import Listing from "../entities/Listing";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new CSClient<Listing>('/deepsearch/search');

const useListings = () => useQuery({
  queryKey: CACHE_KEY_LISTINGS,
  queryFn: () =>  apiClient.getAll({params: {q:'', c: 40}}),
  staleTime: ms('24h'),
 });    

export default useListings;