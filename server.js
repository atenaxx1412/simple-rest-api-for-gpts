const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic GET endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Simple REST API',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Get greeting message
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({
    message: `Hello, ${name}!`,
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Get random number
app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({
    number: randomNumber,
    message: 'Random number generated',
    status: 'success'
  });
});

// Simple POST endpoint
app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  res.json({
    echo: message || 'No message provided',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET  / - Welcome message');
  console.log('  GET  /api/greeting?name=YourName - Greeting message');
  console.log('  GET  /api/random - Random number');
  console.log('  POST /api/echo - Echo message');
});