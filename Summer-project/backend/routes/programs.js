const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust based on your db config

// GET a single program by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM programs WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Program not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all programs
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM programs ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
