const express = require('express');
const pool = require('../db');
const router = express.Router();

// POST /api/contact - Save contact message to database
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert message into database
    const result = await pool.query(
      'INSERT INTO messages (full_name, email, subject, message, sent_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
      [name, email, subject, message]
    );

    res.json({ message: 'Message saved successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

module.exports = router;