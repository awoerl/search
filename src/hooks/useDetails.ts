import { useQuery } from "@tanstack/react-query";
import CSClient from "../services/cs-client";
import Details from '../entities/Details';

const apiClient = new CSClient<Details>('/deepsearch/previewdata');

const useDetails = (id: string, areaId: string) => useQuery({
  queryKey: ['details', id, areaId],
  queryFn: () => apiClient.get(areaId  + '/' + id)
});


export default useDetails;