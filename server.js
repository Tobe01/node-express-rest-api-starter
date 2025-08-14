const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Simple Node.js and Express REST API',
    endpoints: {
      getTasks: '/tasks',
      addTask: 'POST /tasks',
      deleteTask: 'DELETE /tasks/:id'
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
