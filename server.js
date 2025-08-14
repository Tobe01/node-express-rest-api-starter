const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
