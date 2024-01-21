// import Counter from "./state-management/Counter";
import { useReducer } from "react";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/context/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
import loginReducer from "./state-management/reducers/loginReducer";
import UserContext from "./state-management/context/userContext";
// import TaskList from "./state-management/TaskList";

const App = () => {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, userDispatch] = useReducer(loginReducer, "");
  return (
    <TasksContext.Provider value={{ tasks, tasksDispatch }}>
      <UserContext.Provider value={{ user, userDispatch }}>
        <NavBar />
        <HomePage />
      </UserContext.Provider>
    </TasksContext.Provider>
  );
};

export default App;
