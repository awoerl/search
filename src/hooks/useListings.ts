import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CACHE_KEY_LISTINGS  } from "../constants";
import CSClient, { FetchResponse } from "../services/cs-client";
import ms from 'ms';
import Listing from "../entities/Listing";
import useSearchQueryStore from "../store";

const apiClient = new CSClient<Listing>('/deepsearch/search');

const useListings = () => {
  
  const searchQuery = useSearchQueryStore(s => s.searchQuery);

  return useInfiniteQuery<FetchResponse<Listing>, Error>({
    queryKey: [CACHE_KEY_LISTINGS, searchQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
        params: {
          q: searchQuery.searchText,
          c: 40,
          a: searchQuery.areaId,
          l: searchQuery.language,
          p: pageParam
        }
      } 
    ), 
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      const totalResults = lastPage.totalResults;
      const currentPage = searchQuery.page || 1;
      const itemsPerPage = searchQuery.count || 40;
      return (totalResults / itemsPerPage > currentPage) ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h')
  }); 
};    

export default useListings;