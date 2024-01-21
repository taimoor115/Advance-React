// import Counter from "./state-management/Counter";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import UserProvider from "./state-management/userProvider";
import TasksProvdier from "./state-management/tasksProvider";
// import TaskList from "./state-management/TaskList";

const App = () => {
  return (
    <TasksProvdier>
      <UserProvider>
        <NavBar />
        <HomePage />
      </UserProvider>
    </TasksProvdier>
  );
};

export default App;
