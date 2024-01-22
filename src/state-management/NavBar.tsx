import { useContext } from "react";
import LoginStatus from "./user/LoginStatus";
import TasksContext from "./Tasks/tasksContext";

const useTasks = () => useContext(TasksContext);
const NavBar = () => {
  const { tasks } = useTasks();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
