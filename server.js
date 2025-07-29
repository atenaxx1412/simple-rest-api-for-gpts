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
    welcome: 'Simple REST API for GPTs',
    description: 'カスタマイズされたAPIサービスです',
    type: 'welcome'
  });
});

// Get greeting message
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({
    greeting: `Hello, ${name}!`,
    response: `こんにちは、${name}さん！今日も良い一日を！`,
    type: 'greeting'
  });
});

// Get random number
app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({
    number: randomNumber,
    result: `生成されたランダム数値は ${randomNumber} です`,
    type: 'random_number'
  });
});

// Simple POST endpoint
app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  res.json({
    original: message || 'No message provided',
    echo: `エコー: ${message || 'メッセージが提供されませんでした'}`,
    type: 'echo'
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