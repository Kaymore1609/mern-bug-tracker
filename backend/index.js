const express = require('express');
const cors = require('cors');
const bugRoutes = require('./routes/bugRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bugs', bugRoutes);

// Health check or root
app.get('/', (req, res) => {
  res.send('Bug Tracker API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});

