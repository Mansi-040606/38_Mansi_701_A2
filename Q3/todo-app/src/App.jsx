import { useState } from "react";
import "./App.css";
function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  function addTask() {

    if (task.trim() === "") {
      return;
    }

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false
      }
    ]);

    setTask("");
  }

  // Delete Task
  function deleteTask(index) {

    const newTasks = tasks.filter((_, i) => i !== index);

    setTasks(newTasks);
  }

  // Complete / Undo Task
  function completeTask(index) {

    const newTasks = [...tasks];

    newTasks[index].completed =
      !newTasks[index].completed;

    setTasks(newTasks);
  }

return (
  <div className="todo-container">

    <h1>To-Do App</h1>

    <input
      className="input-box"
      type="text"
      placeholder="Enter your task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />

    <button
      className="add-button"
      onClick={addTask}
    >
      Add Task
    </button>

    <ul className="task-list">

      {tasks.map((item, index) => (

        <li className="task-item" key={index}>

          <span
            className="task-text"
            onClick={() => completeTask(index)}
            style={{
              textDecoration: item.completed
                ? "line-through"
                : "none"
            }}
          >
            {item.text}
          </span>

          <button
            className="delete-button"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>

        </li>

      ))}

    </ul>

  </div>
);
}

export default App;