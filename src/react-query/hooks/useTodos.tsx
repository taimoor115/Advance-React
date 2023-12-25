import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const apiClient = new APIClient<Todo>("/todos");

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, //10 sec (  In React Query, "stale time" refers to the amount of time after which cached data is considered outdated and potentially needs to be refreshed.)
  });
};

export default useTodos;
