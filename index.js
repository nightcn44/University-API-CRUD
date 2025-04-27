const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect to database and load models
connectDB();

// middleware
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));
app.use(cors());

// routes
readdirSync('./routes').map((i) => {
  console.log(`Loading route: ${i}`);
  app.use('/api', require('./routes/' + i));
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});