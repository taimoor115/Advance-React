import { useContext } from "react";

import TasksContext from "./tasksContext";
import useUserStore from "../user/userStore";

const useTasks = () => useContext(TasksContext);
const TaskList = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks, dispatch } = useTasks();
  const { user } = useUserStore();

  return (
    <>
      <p>User: {user}</p>
      <button
        // onClick={() =>
        //   setTasks([{ id: Date.now(), title: "Task " + Date.now() }, ...tasks])
        // }
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Tasks" + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              // onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
