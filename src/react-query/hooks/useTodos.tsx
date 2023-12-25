import { useQuery } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";




const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, //10 sec (  In React Query, "stale time" refers to the amount of time after which cached data is considered outdated and potentially needs to be refreshed.)
  });
};

export default useTodos;
