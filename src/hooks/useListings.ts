import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CACHE_KEY_LISTINGS } from "../core/constants";
import CSClient, { FetchResponse } from "../core/cs-client";
import ms from "ms";
import Listing from "../entities/Listing";
import useSearchQueryStore from "../stores/querystore";

const apiClient = new CSClient<Listing>("/deepsearch/search");

const useListings = () => {
  const searchQuery = useSearchQueryStore((s) => s.searchQuery);

  return useInfiniteQuery<FetchResponse<Listing>, Error>({
    queryKey: [CACHE_KEY_LISTINGS, searchQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          q: searchQuery.searchText,
          c: 27,
          a: searchQuery.areaId,
          l: searchQuery.language,
          p: pageParam,
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      const totalResults = lastPage.totalResults;
      const currentPage = searchQuery.page || 1;
      const itemsPerPage = searchQuery.count || 27;
      return totalResults / itemsPerPage > currentPage
        ? allPages.length + 1
        : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useListings;
