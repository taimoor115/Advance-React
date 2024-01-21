// import Counter from "./state-management/Counter";
import { useReducer } from "react";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/context/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
import UserProvider from "./state-management/userProvider";
// import TaskList from "./state-management/TaskList";

const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <UserProvider>
        <NavBar />
        <HomePage />
      </UserProvider>
    </TasksContext.Provider>
  );
};

export default App;
