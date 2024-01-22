// import Counter from "./state-management/Counter";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/Tasks";
import Counter from "./state-management/counter/Counter";
// import TaskList from "./state-management/TaskList";

const App = () => {
  return (
    <TasksProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvider>
  );
};

export default App;
