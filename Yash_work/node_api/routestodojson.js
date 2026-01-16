const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const filePath = path.join(__dirname, './todo.json');

router.post('/create', async (req, res) => {
  try {
    const newTodo = {
      id: uuidv4(),
      ...req.body,
    };

    let todos = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      todos = JSON.parse(fileData);
    } catch (err) {
      todos = [];
    }

    todos.push(newTodo);

    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({
      message: 'Failed to create todo',
      error: error.message,
    });
  }
});
router.get('/all', async (req, res) => {
  try {
    const fileData = await fs.readFile(filePath, 'utf8');
    todos = JSON.parse(fileData);
    res.status(201).json(todos);
  } catch (error) {
    res.status(400).json({
      message: 'Failed to fetch all data',
      error: error.message,
    });
  }
});
router.get('/get/:tag', async (req, res) => {
  const { tag } = req.params;
  try {
    const fileData = await fs.readFile(filePath, 'utf8');

    const todos = JSON.parse(fileData);

    const result = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].tags && todos[i].tags.includes(tag)) {
        result.push(todos[i]);
      }
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: 'failed to fetch the tagwise data',
      error: error.message,
    });
  }
});

module.exports = router;
