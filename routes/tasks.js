const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Learn Node.js' },
  { id: 2, title: 'Build a REST API' }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST a new task
router.post('/', (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// DELETE a task
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
