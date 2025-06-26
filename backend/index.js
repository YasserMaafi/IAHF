const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./db');
const { authenticate, authorize } = require('./middleware');

// Import routes
const authRoutes = require('./Auth');
const programsRoutes = require('./routes/programs');
const applicationsRoutes = require('./routes/applications');
const contactRoutes = require('./routes/contact');

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Test route to get all users (optional, for dev)
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Auth routes
app.use('/api/auth', authRoutes);

// Program routes (public)
app.use('/api/programs', programsRoutes);

// Application routes (protected)
app.use('/api/applications', applicationsRoutes);

// Contact routes (public)
app.use('/api/contact', contactRoutes);

// Admin-only test route
app.get('/api/admin-data', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Only admins can see this!' });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
