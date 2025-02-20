import { useQuery } from "@tanstack/react-query";
import CSClient from "../core/cs-client";
import User from "../entities/User";

const apiClient = new CSClient<User>("/search/user");

const useUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: () => apiClient.get(""),
  }).data;

export default useUser;
