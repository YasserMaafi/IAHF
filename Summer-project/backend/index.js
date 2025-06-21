const express = require('express');     // Web server
const cors = require('cors');           // Allow access from frontend
require('dotenv').config();             // Load .env file
const pool = require('./db');           // Import DB connection

const app = express();                  // Create our server
app.use(cors());                        // Enable CORS for frontend requests
app.use(express.json());               // Accept JSON in POST requests


app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// 👇 New route that queries the database
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users'); // example table
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

const authRoutes = require('./Auth');
app.use('/api/auth', authRoutes);

const { authenticate, authorize } = require('./middleware');

app.get('/api/admin-data', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Only admins can see this!' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
