const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const todos=require("./data")
const axios=require("axios")
router.post("/create",(req,res)=>{
    const { title } = req.body;

  const newTodo = {
    id: uuidv4(),
    title,
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
})
router.get("/all",(req,res)=>{
    return res.status(201).json(todos)
})
router.put("/completed:id",(req,res)=>{
      const {id}=req.params;
      const todo=todos.find(t=>t.id=id);
      if(!todo)return res.status(404).json("unable to find the id")
      todo.completed=true;
      return res.status(200).json(todo)
})
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Unable to find the id" });
  }

  todos.splice(index, 1); 

  res.json({ message: "Todo deleted" });
});
router.get("/external-todos", async (req, res) => {
  try {
    
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

   
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch external todos" });
  }
});


module.exports=router