import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_LISTINGS  } from "../constants";
import CSClient from "../services/cs-client";
import ms from 'ms';
import Listing from "../entities/Listing";
import useSearchQueryStore from "../store";

const apiClient = new CSClient<Listing>('/deepsearch/search');

const useListings = () => {
  const {searchQuery} = useSearchQueryStore();
  return useQuery({
    queryKey: [CACHE_KEY_LISTINGS, searchQuery],
    queryFn: () =>  apiClient.getAll({params: {q:searchQuery.searchText, c: 40, a:searchQuery.areaId}}),
    staleTime: ms('24h'),
  })
};    

export default useListings;