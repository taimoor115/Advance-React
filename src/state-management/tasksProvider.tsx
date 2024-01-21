import { ReactNode, useReducer } from "react";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./context/tasksContext";

interface Props {
  children: ReactNode;
}
const TasksProvdier = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvdier;
