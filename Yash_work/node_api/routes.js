const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Todo=require("./models/Todo")
const axios=require("axios")

router.post("/create", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create todo",
      error: error.message,
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const todo = await Todo.find();

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

router.put("/completed/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.updateOne(
      {_id:id},
{
      $set:
      { isCompleted: true }},
      {new:true}
    
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.deleteOne({_id:id});
  if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

 

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
router.get("/find/:tag", async (req, res) => {
  try {
    const { tag } = req.params;

    // const todos = await Todo.find({ tags: tag });
     const todos = await Todo.find({
      $text: { $search: tag }
    });
    // console.log(todos)

    if (todos.length === 0) {
      return res.status(404).json({
        message: "No todos found with this tag"
      });
    }

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
});


module.exports=router