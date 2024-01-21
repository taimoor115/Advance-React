// import Counter from "./state-management/Counter";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import UserProvider from "./state-management/userProvider";
import { TasksProvider } from "./state-management/Tasks";
// import TaskList from "./state-management/TaskList";

const App = () => {
  return (
    <TasksProvider>
      <UserProvider>
        <NavBar />
        <HomePage />
      </UserProvider>
    </TasksProvider>
  );
};

export default App;
