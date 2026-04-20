import { useEffect, useState } from "react";
import { getTasks } from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <h1 className="main-title">Task Manager</h1>

      <div className="form-container">
        <TaskForm refresh={fetchTasks} />
      </div>

      {/* VIEW TASK BUTTON */}
      <button
        className="view-btn"
        onClick={() => setShowTasks(!showTasks)}
      >
        {showTasks ? "Hide Tasks" : "View Tasks"}
      </button>

      {/* TASK LIST */}
      {showTasks && (
        <TaskList tasks={tasks} refresh={fetchTasks} />
      )}
    </div>
  );
}

export default App;