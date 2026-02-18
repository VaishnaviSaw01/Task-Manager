import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const API = "http://localhost:3000/tasks";

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await axios.post(API, { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(`${API}/${task.id}`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>

      <div className="input-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>
            <span
              className={`task-title ${
                task.completed ? "completed" : ""
              }`}
              onClick={() => toggleTask(task)}
            >
              {task.title}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
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
