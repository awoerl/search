import { useQuery } from "@tanstack/react-query";
import CSClient from "../services/cs-client";
import Listing from '../entities/Listing';

const apiClient = new CSClient<Listing>('/listing');

const useListing = (id: string) => useQuery({
  queryKey: ['listings', id],
  queryFn: () => apiClient.get(id)
});

export default useListing;