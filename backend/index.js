const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());  
app.use(express.json());


let tasks = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build API", completed: true }
];

const getNextId = () => {
  return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
};


app.get("/tasks", (req, res) => {
  const { completed } = req.query;

  if (completed !== undefined) {
    const filtered = tasks.filter(
      task => task.completed === (completed === "true")
    );
    return res.json(filtered);
  }

  res.json(tasks);
});


app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});


app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: getNextId(),
    title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});


app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});


app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
