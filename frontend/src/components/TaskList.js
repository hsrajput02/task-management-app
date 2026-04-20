import { updateTask, deleteTask } from "../services/api";

function TaskList({ tasks, refresh }) {
  return (
    <div className="task-container">
      <h1>Tasks List</h1>

      {tasks.map((task) => (
        <div className="task-card" key={task._id}>
          
          {/* LEFT SIDE */}
          <div className="task-left">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="task-right">
            <p className="date">
              {new Date(task.createdAt).toDateString()}
            </p>

            <span className={`status ${task.status}`}>
              {task.status}
            </span>

            <div className="buttons">
              <button
                className="complete-btn"
                onClick={() => {
                  updateTask(task._id, { status: "Completed" });
                  refresh();
                }}
              >
                Mark as Completed
              </button>

              <button
                className="delete-btn"
                onClick={() => {
                  deleteTask(task._id);
                  refresh();
                }}
              >
                Delete
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default TaskList;