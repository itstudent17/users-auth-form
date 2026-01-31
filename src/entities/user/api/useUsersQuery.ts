import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./getUsers";

export function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  });
}

