// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from Node.js Server 🚀");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// const fs = require("fs");

// console.log("Starting file read...");
// const data = fs.readFileSync("example.txt", "utf8");
// console.log("File content:", data);
// console.log("End of script.");

// const mypromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     if (!success) {
//       reject("Promise rejected due to an error.");
//     } else {
//       resolve("Promise resolved successfully!");
//     }
//   }, 2000);
// });

// mypromise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = process.env.PORT || 3000;

const todos = require("./data");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express Server 🚀");
});

app.post("/todos", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description required" });
  }

  const newTodo = {
    id: uuidv4(),
    title,
    description,
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// READ all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// READ single todo
app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

// UPDATE todo
app.put("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const { title, description, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
